<template>
  <div class="layout">
    <Header />
    <main class="layout__main">
      <div class="layout__content">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__main {
  flex: 1;
  width: 100%;
}

.layout__content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  padding-top: 40px;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    padding: 0 16px;
    padding-top: 24px;
    padding-bottom: 40px;
  }
}
</style>
