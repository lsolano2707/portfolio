<template>
  <div className="w-full overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
    <div :style="{ width: `${scale * 20}%` }"
      className="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-secondary">{{ `${scale * 20}%` }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<({
  scale: number;
})>();

</script>
