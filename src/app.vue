<template>
  <div id="app">
    <header>
      <h1>@scriptdaemon</h1>
      <nav>
        <!-- Use router-link components for navigation. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default. -->
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link to="/page1">Page 1</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/page2">Page 2</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/page3">Page 3</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Route outlet: component matched by the route will render here. -->
    <transition :name="transition">
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

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child)::after {
  padding-right: .5em;
  padding-left: .5em;
  content: '/';
}

.router-link-active {
  text-decoration: underline;
}

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
