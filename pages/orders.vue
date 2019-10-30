<template>
  <div>
    <h1>Commandes en cours de traitement</h1>

    <div v-for="order in orders">
      <div class="row">
        <div class="col-sm">
          {{order.title}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>

    export default {
        data() {
            return {
                orders: []
            }
        },

        methods: {
            async fetchOrders() {
                const response = await fetch('/.netlify/functions/todo-all');
                this.orders = await response.json();
            }
        },

        // First attempt was to use `asyncData` which is particular to Nuxt lifecycle
        mounted() {
            this.fetchOrders()
        }
    }
</script>

<style lang="scss" scoped>
  #map {
    height: 600px;
  }
</style>
