<template>
  <NuxtLink :to="`#`" class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <button class="product-card__favorite" aria-label="В избранное">
        <NuxtImg
          src="/favorite.svg"
          alt="Favorite"
          class="favorite-icon"
          width="16"
          height="16"
        />
      </button>
    </div>

    <div class="product-card__info">
      <div class="product-card__price">
        <span class="product-card__price-main"
          >{{ formatPrice(product.price) }} ₽</span
        >
        <span class="product-card__price-x2">
          {{ formatPrice(Math.ceil(product.price / 2)) }} ₽ x 2
        </span>
      </div>
      <h3 class="product-card__name">{{ product.name }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "~/types/Product";

const props = defineProps<{
  product: Product;
}>();

const formatPrice = (price: number) => price.toLocaleString("ru-RU");
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables" as *;

.product-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &__image-wrapper {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    background: $header_background;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.4s ease;

    .product-card:hover & {
      transform: scale(1.05);
    }
  }

  &__favorite {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #fff;
      transform: scale(1.1);
    }
  }

  &__info {
    padding: 16px 0 12px;
  }

  &__price {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__price-main {
    font-size: $scale-6;
    font-weight: 500;
    color: #000;
  }

  &__price-x2 {
    padding: $scale-1;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    background: #000;
    font-weight: 400;
  }

  &__name {
    font-size: 16px;
    font-weight: 400;
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    &__price {
      flex-direction: column;
    }
    &__price-main {
      font-size: $scale-6;
    }
  }
}
</style>
