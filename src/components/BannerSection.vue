<template>
  <div class="banner w-full my-20">
    <div class="container mx-auto px-4 mt-10">
      <div class="flex flex-wrap justify-center">
        <div class="w-72 h-72 shadow-lg border border-gray-200 rounded-full overflow-hidden">
          <img :src="profile.img" alt="banner" class="h-full w-full" />
        </div>
        <div class="w-full md:w-1/2 ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left self-center">
          <h1 class="font-bold text-5xl mb-6" data-aos="fade-up" v-html="$t('profile.title')"></h1>
          <p data-aos="fade-up" v-html="$t('profile.description')"></p>
          <div data-aos="fade-up" class="self-end">
            <ul class="inline-flex flex-row mt-4 space-x-2 list-none pl-0">
              <template v-for="item in contacts">
                <li v-if="item.showPortfolio" :key="item.colorIcon" data-toggle="tooltip" :title="item.colorIcon">
                  <a :href="item.href" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center h-8 w-8">
                    <q-icon :name="`img:/resources/icons/${item.colorIcon}`" size="32px" />
                  </a>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from '../composables/useData';

const { profile, contacts } = useData();
</script>
