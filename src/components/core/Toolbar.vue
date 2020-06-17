<template v-slot:activator="{ on }">
  <div>
    <v-app-bar flat>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>

      <div class="headline text-uppercase ml-0">
        <div v-resize-text>
          <router-link
            :to="{ name: 'Home' }"
            tag="span"
            style="cursor: pointer;"
            >Title</router-link
          >
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
          :class="['hidden-sm-and-down', item.class]"
        >
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </v-btn>

        <v-btn
          text
          v-if="user"
          @click="signOut"
          class="hidden-sm-and-down btnLogout"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          {{ "LOGOUT" }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" absolute disable-resize-watcher>
      <v-list>
        <v-list-item>
          <v-list-item-content>{{ "Title" }}</v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click.stop="sidebar = !sidebar">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ResizeText from "vue-resize-text";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Toolbar",
  directives: {
    ResizeText
  },
  created() {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.loggedIn = true;
    //   } else {
    //     this.loggedIn = false;
    //   }
    // });
  },
  data() {
    return {
      isDark: false,
      sidebar: false
    };
  },
  computed: {
    ...mapGetters(["user"]),
    menuItems() {
      // console.log("User");
      // console.log(this.user);
      if (this.user) {
        return [
          {
            title: "Home",
            link: "Home",
            icon: "mdi-home",
            class: "btnHome"
          },
          {
            title: "About",
            link: "About",
            icon: "mdi-help-circle-outline",
            class: "btnAbout"
          },
          {
            title: "My Profile",
            link: "Profile",
            icon: "mdi-account",
            class: "btnProfile"
          }
        ];
      }
      return [
        {
          title: "Home",
          link: "Home",
          icon: "mdi-home"
        },
        {
          title: "Login",
          link: "Login",
          icon: "mdi-lock",
          class: "btnLogin"
        },
        {
          title: "Sign Up",
          link: "Register",
          icon: "mdi-plus-circle-outline",
          class: "btnLogin"
        }
      ];
    }
  },
  methods: {
    ...mapActions(["logout"]),
    signOut() {
      this.logout();
    }
  },
  mutations: {
    ...mapGetters(["setCurrentUser"])
  }
};
</script>

<style lang="scss" scoped></style>
