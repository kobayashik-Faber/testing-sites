<script setup lang="ts">
useSeoMeta({
  title: "@testing-sites/nuxt"
});

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
];
</script>

<template>
  <div class="breadcrumb">
    <UBreadcrumb :links="links" />
  </div>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>

<style>
.breadcrumb {
  padding-block: 1rem;
}
</style>
