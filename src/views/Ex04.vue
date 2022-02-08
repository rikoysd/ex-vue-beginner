<template>
  <div>
    <input type="text" v-model.number="price1" /> <br />
    <input type="text" v-model.number="price2" /> <br />
    <input type="text" v-model.number="price3" /> <br />
    税抜き価格：{{ subTotal }}円<br />
    税込み価格：{{ total }}円
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private price1 = 0;
  private price2 = 0;
  private price3 = 0;

  get subTotal(): number {
    return this.price1 + this.price2 + this.price3;
  }

  get total(): number {
    let answer = (this.price1 + this.price2 + this.price3) * 1.1;
    return Math.floor(answer);
  }
}
</script>

<style scoped></style>
