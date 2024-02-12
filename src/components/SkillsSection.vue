<template>
  <div class="container mx-auto">
    <h1 class="font-semibold text-5xl mb-12 text-center" data-aos="fade-up" v-html="$t('skills.title')"></h1>

    <div v-for="(item, index) in skills" :key="index" class="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-20">
      <!-- {{ item }} -->
      <div class="flex flex-col m-4 col-span-1 sm:col-span-2" :class="{ 'sm:order-last': index % 2 !== 0 }">
        <h2 class="font-semibold text-3xl" data-aos="fade-up" v-html="$t(`skills.items.${item.id}.title`)" />

        <p v-if="$te(`skills.items.${item.id}.description`)" data-aos="fade-up"
          v-html="$t(`skills.items.${item.id}.description`)" />
        <div class="effects h-full w-full pattern-diagonal-lines-sm text-gray-200 mt-10" />
      </div>

      <div class="flex flex-wrap col-span-1 sm:col-span-3 items-center">
        <div v-for="item2 in item.items" :key="item2.icon"
          class="flex flex-col items-center m-4 w-full sm:w-5/12 justify-center" data-aos="fade-up">
          <div class="inline-flex items-center font-semibold mb-4 h-10">
            <q-icon v-if="item2.icon" :name="`img:/resources/icons/${item2.icon}.svg`" size="2.8rem" class="w-10 mr-4" />
            {{ item2.name }}
          </div>
          <ProgressBar :scale="item2.scale" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue';

import { useData } from '../composables/useData';

const { skills } = useData();
</script>
