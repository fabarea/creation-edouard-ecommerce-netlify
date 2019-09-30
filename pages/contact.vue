<template>
  <div>

    <div class="row">
      <div class="col-sm">
        <div><strong>Edouard Compaoré</strong></div>
        <div>Téléphone: +226 75 25 00 52</div>
        <div>Téléphone: +226 78 92 49 57</div>
      </div>
      <div class="col-sm">
        <img src="/edouard-compaore.jpeg" alt="" width="350">
      </div>
    </div>

    <div id="map" style="margin-top: 30px">
      [TODO: carte de ouagadougou avec un marker qui pointe sur la ville de Ouaga]
    </div>
  </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        computed: {
            ...mapState(["storedata"])
        }
    };
</script>

<style lang="scss" scoped>
</style>
