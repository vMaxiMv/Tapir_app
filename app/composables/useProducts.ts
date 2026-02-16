import type { Product, ProductsResponse } from "~/types/Product";

export const useProducts = () => {
  const products = ref<Product[]>([]);
  const currentPage = ref(1);
  const totalPages = ref(1);
  const isLoading = ref(false);
  const hasError = ref(false);
  const limit = 16;

  const { data: initialData } = useAsyncData<ProductsResponse>(
    "initial-products",
    () =>
      $fetch(`https://test-task-api.tapir.ws/products?page=1&limit=${limit}`),
    { server: true },
  );

  watchEffect(() => {
    if (initialData.value) {
      products.value = initialData.value.products;
      currentPage.value = initialData.value.currentPage;
      totalPages.value = initialData.value.totalPages;
    }
  });

  const loadMore = async () => {
    if (isLoading.value || currentPage.value >= totalPages.value) return;

    isLoading.value = true;
    hasError.value = false;

    try {
      const response = await $fetch<ProductsResponse>(
        `https://test-task-api.tapir.ws/products?page=${currentPage.value + 1}&limit=${limit}`,
      );

      products.value.push(...response.products);
      currentPage.value = response.currentPage;
      totalPages.value = response.totalPages;
    } catch (err) {
      console.error("Ошибка загрузки товаров:", err);
      hasError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const retryLoad = () => {
    hasError.value = false;
    loadMore();
  };

  const hasMore = computed(() => currentPage.value < totalPages.value);

  return {
    products,
    isLoading,
    hasError,
    hasMore,
    loadMore,
    retryLoad,
  };
};
