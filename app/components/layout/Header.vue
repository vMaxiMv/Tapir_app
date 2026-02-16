<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <NuxtLink to="/" class="header__logo-link">
          <div class="header__logo-icon"></div>
        </NuxtLink>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Мужчинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Женщинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Каталог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Доставка</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Блог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">О нас</a>
          </li>
        </ul>
      </nav>

      <button class="header__burger" aria-label="Меню">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables" as *;
@use "~/assets/scss/_mixins" as *;
.header {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;

  &__container {
    @include container(1200px, 24px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    gap: $scale-6;
  }

  &__logo {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    width: 40px;
    height: 40px;
    background: $red_color;
    border-radius: $scale-1;
  }

  &__nav {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  &__nav-list {
    display: flex;
    gap: $scale-10;
    list-style: none;
    margin: 0;
    padding: 10px $scale-6;
    border-radius: 4px;
    background: $header_background;
  }

  &__nav-link {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }

  &__burger {
    display: none;
    padding: $scale-4;
    flex-direction: column;
    gap: $scale-1;
    background: none;
    border: none;
    cursor: pointer;
    background: $header_background;

    &-line {
      width: $scale-6;
      height: 2px;
      background: #000;
    }
  }

  @media (max-width: 1023px) {
    &__container {
      height: 70px;
    }

    &__nav-list {
      display: none;
    }

    &__burger {
      display: flex;
    }
  }
}
</style>
