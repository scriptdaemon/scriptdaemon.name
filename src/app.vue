<template>
  <v-app>
    <v-toolbar app tabs>
      <v-toolbar-title>
        <h1 class="display-1">@scriptdaemon</h1>
      </v-toolbar-title>
      <v-tabs grow slot="extension">
        <v-tab to="/page1">Page 1</v-tab>
        <v-tab to="/page2">Page 2</v-tab>
        <v-tab to="/page3">Page 3</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <v-container class="slide-container">
        <transition :name="transition">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transition: 'slide-left'
    }
  },
  watch: {
    $route (to, from) {
      this.transition = to.meta.index < from.meta.index
        ? 'slide-right'
        : 'slide-left'
    }
  }
}
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';

.slide-container {
  position: relative;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  position: absolute;
  transition: 1s;
}

.slide-right-enter,
.slide-right-leave-to,
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
}

.slide-right-enter,
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-to,
.slide-left-enter {
  transform: translate(100%, 0);
}
</style>
