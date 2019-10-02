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
        },
        data() {
            return {
                map: null,
            };
        },
        mounted() {

            this.map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            L.marker([51.5, -0.09]).addTo(this.map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        },
    };
</script>

<style lang="scss" scoped>
  #map {
    height: 600px;
  }
</style>
