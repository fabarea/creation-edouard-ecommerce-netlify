<template>
  <div>
    <h1>Commandes en cours de traitement</h1>

    <no-ssr>
      <div v-for="order in orders">
        <div class="row">
          <div class="col-sm">
            {{order.title}}
          </div>
        </div>
      </div>
    </no-ssr>

  </div>
</template>

<script>

    export default {
        data() {
            return {
                orders: []
            }
        },

        async asyncData({params}) {
            // todo would be nice to have the domain in a constants
            const response = await fetch('https://creation-edouard.netlify.com/.netlify/functions/todos');
            const {data} = await response.json();
            return {orders: data}
        }
    }
</script>

<style lang="scss" scoped>
  #map {
    height: 600px;
  }
</style>
