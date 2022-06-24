<script setup>
import rectangle from '@svgs/rectangle.svg';
import ellipse from '@svgs/ellipse.svg';
import { demo } from '@js/menu.js';
import { onMounted } from 'vue';
onMounted(() => {
  document.getElementById('trigger').addEventListener('click', function () {
    demo();
  });
});
</script>

<template>
  <button id="trigger"><h1>HOME</h1></button>

  <rectangle />
</template>
