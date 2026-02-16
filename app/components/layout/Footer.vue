<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__column">
        <h3 class="footer__title">Каталог</h3>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Все бренды</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Nike</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Adidas</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Puma</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">New Balance</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Помощь</h3>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Доставка</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Заказ и оплата</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Обмен и Возврат</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">F.A.Q.</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Информация</h3>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Преимущества</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Гарантия и безопасность</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Индивидуальный заказ</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Акции</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <h3 class="footer__title">Компания</h3>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">О нас</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Блог</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Отзывы</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables" as *;
@use "~/assets/scss/_mixins" as *;
.footer {
  background: #000;
  color: #fff;
  padding: 100px 0;

  &__container {
    @include container(1200px, 24px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  &__column {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 14px;
    font-weight: 400;
    color: $footer_title_color;
    margin-bottom: 14px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    font-size: 14px;
    margin-bottom: 14px;
  }

  &__link {
    color: #ccc;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 1023px) {
    &__container {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
  }

  @media (max-width: 767px) {
    &__container {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    padding: 40px 0 30px;
  }
}
</style>
