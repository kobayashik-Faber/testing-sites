<script setup lang="ts">
useSeoMeta({
  title: "@testing-sites/nuxt | About"
});

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "About",
    icon: "i-heroicons-user",
  },
];
</script>

<template>
  <div class="breadcrumb">
    <UBreadcrumb :links="links" />
  </div>
  <section>
    <p>This page will be displayed at the /about/ route.</p>
  </section>
</template>

<style>
.breadcrumb {
  padding-block: 1rem;
}
</style>
