<template>
  <div class="home">
    <section class="home__hero">
      <div class="home__hero-container">
        <h1 class="home__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
        <NuxtLink to="/catalog" class="home__button"> В каталог </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables" as *;
.home {
  &__hero {
    min-height: 650px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &__hero-container {
    max-width: 720px;
    width: 100%;
  }

  &__title {
    font-size: $scale-16;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 40px;
    color: #000;

    @media (max-width: 767px) {
      font-size: 48px;
    }
  }

  &__button {
    display: inline-block;
    background: $red_color;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 28px;
    text-decoration: none;
  }
}
</style>
