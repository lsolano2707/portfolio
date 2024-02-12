<template>
  <q-select v-model="locale" :label="label" :options="localeOptions" :outlined="outlined" :borderless="borderless"
    emit-value map-options options-dense :hide-dropdown-icon="hideDropdownIcon" :data-cy="dataCy">
    <template v-slot:selected-item="{ opt }">
      <q-icon :name="`img:/resources/icons/langs/${opt.value}.svg`" size="24px" />
      <span v-if="showLabel" class="ml-1">
        {{ opt.label }}
      </span>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-icon :name="`img:/resources/icons/langs/${scope.opt.value}.svg`" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
// #region - Imports
import { computed } from 'vue';

// Composables
import { i18n } from '../boot/i18n';
// #endregion

defineProps<({
  label?: string;
  showLabel?: boolean;
  outlined?: boolean;
  borderless?: boolean;
  hideDropdownIcon?: boolean;
  dataCy?: string;
})>();

// Variables
const { t, locale } = i18n.global;

const localeOptions = computed(() => [
  { value: 'en', label: t('languages.en') },
  { value: 'es', label: t('languages.es') }
]);
</script>
