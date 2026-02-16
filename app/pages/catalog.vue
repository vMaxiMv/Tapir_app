<template>
  <div class="catalog">
    <div class="catalog__header">
      <h1 class="catalog__title">КАТАЛОГ</h1>
    </div>

    <div class="catalog__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="catalog__load-more">
      <button
        v-if="hasMore && !isLoading"
        class="catalog__button"
        @click="loadMore"
      >
        Показать ещё
      </button>

      <div v-else-if="isLoading" class="catalog__loading">Загрузка...</div>

      <div v-else-if="hasError" class="catalog__error">
        <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
        <button
          class="catalog__button catalog__button--retry"
          @click="retryLoad"
        >
          Повторить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "~/components/catalog/ProductCard.vue";
import { useProducts } from "~/composables/useProducts";

const { products, isLoading, hasError, hasMore, loadMore, retryLoad } =
  useProducts();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables" as *;

.catalog {
  &__header {
    text-align: center;
    margin-bottom: 48px;
  }

  &__title {
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 24px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1023px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px 16px;
    }
  }

  &__load-more {
    text-align: center;
    margin-top: 60px;
  }

  &__button {
    background: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 24px;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
  }

  &__loading {
    font-size: 14px;
    color: #000;
  }

  &__error {
    &-text {
      color: #000;
      margin-bottom: 16px;
    }
  }
}
</style>
