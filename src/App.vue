<template>
  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/gallery">Go to Gallery</router-link>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>
