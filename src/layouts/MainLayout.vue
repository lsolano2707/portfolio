
<template>
  <q-layout view="hHh lpR fff">

    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <Footer />
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
// Layouts
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
