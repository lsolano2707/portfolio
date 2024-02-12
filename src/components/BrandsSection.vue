<template>
  <div class="container mx-auto text-center">
    <h1 class="font-semibold text-5xl mb-12 text-center" data-aos="fade-up" v-html="$t('brands.title')" />
    <p class="text-2xl" data-aos="fade-up" v-html="$t('brands.description')" />
    <p class="text-xs" data-aos="fade-up" v-html="$t('brands.note')" />
    <div class="card-stack w-full grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10">
      <a v-for="(item, index) in brands" :key="index" :href="item.url" target="_blank" rel="noreferrer" data-aos="fade-up"
        class="grayscale hover:grayscale-0 dark:opacity-100 flex items-center justify-center px-10 bg-white dark:bg-darkBg border border-subtitle hover:border-subtitle dark:border-hoverCard dark:hover:border-subtitle rounded-lg shadow-none hover:shadow-lg transition ease-bounce z-0 hover:z-50 transform scale-100 hover:scale-105 py-4 viewport-animation-card">
        <q-icon v-if="item.logo" :name="`img:/resources/brands/${item.logo}.svg`" size="10rem" class="h-16 m-0" />
        <q-tooltip>
          {{ item.name }}
        </q-tooltip>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from '../composables/useData';

const { brands } = useData();
</script>
