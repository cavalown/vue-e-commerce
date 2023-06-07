<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td class="text-right">
          {{ product.origin_price }}
        </td>
        <td class="text-right">
          {{ product.price }}
        </td>
        <td>
          <span :class="product.is_enabled ? 'text-success' : 'text-muted'">{{ product.is_enabled ? "啟用" : "未啟用" }}</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts() {
      const api = `${import.meta.env.VITE_API_SERVER}api/${import.meta.env.VITE_API_PATH}admin/products`;
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            console.log('res:', res);
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.getProducts();
  },
}
</script>

<style></style>