<template>
  <div class="container mx-auto text-center">
    <h1 class="font-semibold text-5xl mb-12" data-aos="fade-up" v-html="$t('aboutMe.title')"></h1>
    <p data-aos="fade-up" v-html="$t('aboutMe.description', { years })"></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const years = ref(new Date().getFullYear() - 2012);
</script>
