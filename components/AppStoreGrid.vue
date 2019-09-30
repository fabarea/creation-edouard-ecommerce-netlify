<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
        <div class="img-contain">
          <NuxtLink :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`" width="50px" height="200px"/>
          </NuxtLink>
        </div>
        <strong>{{ item.name }}</strong>
        <h4 class="price">{{ item.price | chf }}</h4>
        <NuxtLink :to="`product/${item.id}`">
          <button class="multi-item">Voir ></button>
        </NuxtLink>
      </div>
    </transition-group>
    <aside>
      <h3>Filtre par prix:</h3>
      <p style="margin-top: 5px">
        Prix maxium
        <strong>CHF {{ pricerange }}</strong>
      </p>
      <input
        class="slider"
        id="pricerange"
        type="range"
        v-model="pricerange"
        :min="min"
        :max="max"
        step="0.1"
      />
      <span class="min">CHF {{ min }}</span>
      <span class="max">CHF {{ max }}</span>
    </aside>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      min: 10,
      max: 50,
      pricerange: 50
    };
  },
  computed: {
    filteredprice() {
      return this.data.filter(el => el.price < this.pricerange);
    }
  },
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  display: inline-block;
  float: right;
}
</style>
