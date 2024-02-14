<template>
  <div class="container mx-auto text-center">
    <h1 class="font-semibold text-5xl mb-12" data-aos="fade-up" v-html="$t('aboutMe.title')"></h1>
    <p data-aos="fade-up" v-html="$t('aboutMe.description', { years })"></p>
    years: {{ years }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const years = computed(() => new Date().getFullYear() - 2012);
</script>
