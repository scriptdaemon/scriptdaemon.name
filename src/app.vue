<template>
  <div id="app">
    <header>
      <h1>@scriptdaemon</h1>
      <nav class="tabs">
        <ul>
          <!-- Use router-link components for navigation. -->
          <router-link tag="li" to="/page1"><a>Page 1</a></router-link>
          <router-link tag="li" to="/page2"><a>Page 2</a></router-link>
          <router-link tag="li" to="/page3"><a>Page 3</a></router-link>
        </ul>
      </nav>
    </header>

    <transition :name="transition">
      <!-- Route outlet: component matched by the route will render here. -->
      <router-view/>
    </transition>
  </div>
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
@import '~bulma';

.slide {
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
