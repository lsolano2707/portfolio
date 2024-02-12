<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-header bordered class="bg-gray-800 text-white shadow justify-center px-2 py-1">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="/" class="text-white">
          Portfolio
        </router-link>
      </q-toolbar-title>
      <q-space></q-space>
      <LanguageDropdown borderless hideDropdownIcon />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import LanguageDropdown from '../components/LanguageDropdown.vue';
</script>
