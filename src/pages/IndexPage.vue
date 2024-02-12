<template>
  <q-page class="m-auto">
    <section id="banner" className="py-28">
      <BannerSection />
    </section>
    <section id="about" className="py-28">
      <AboutMeSection />
    </section>
    <section id="skills" className="py-28">
      <SkillsSection />
    </section>
    <section id="brands" className="py-28">
      <BrandsSection />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import AboutMeSection from 'src/components/AboutMeSection.vue';
import BannerSection from 'src/components/BannerSection.vue';
import BrandsSection from 'src/components/BrandsSection.vue';
import SkillsSection from 'src/components/SkillsSection.vue';
</script>

<style scoped>
section {
  &:nth-of-type(2n+1) {
    background: #fff;
  }

  &:nth-of-type(2n) {
    background: #f7fafc;
  }
}
</style>
