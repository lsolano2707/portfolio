<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer className="w-full bg-gray-800 text-white print:hidden">
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="lg:mr-auto mb-10 lg:mb-0 ">
        <div className="mb-2 text-white">{{ $t('contact.title2') }}</div>
        <ul className="inline-flex flex-row mt-4 space-x-2 list-none pl-0">
          <template v-for="item in contacts">
            <template v-if="item.showPortfolio">
              <li :key="item.icon" data-toggle="tooltip" :title="item.icon">
                <a :href="item.href" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 w-5">
                  <q-icon v-if="item.icon" :name="`img:/resources/icons/${item.icon}`" size="18px" />
                </a>
              </li>
            </template>
          </template>
        </ul>
      </div>

      <hr className="my-4" />
      <div className="text-center">
        {{ profile.name }} | {{ $t('profile.description') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData } from '../composables/useData';

const { profile, contacts } = useData();
</script>
