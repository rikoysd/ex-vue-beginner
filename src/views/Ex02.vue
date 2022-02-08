<template>
  <div class="profile">
    <div>
      名前：{{ name }} <br />
      年齢：{{ age }}歳 <br />
      10年後の年齢：{{ plus10Years }}歳 <br />
      趣味：
      <span v-for="hobby of hobbies" v-bind:key="hobby">
        {{ hobby }}
      </span>
    </div>
    <div><a v-bind:href="url">自社ページリンク</a></div>
    <div><img v-bind:src="img" /></div>
    <button type="button" v-bind:disabled="canNotClick" v-on:click="onclick">
      ボタン
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private name = "";
  private age = 0;
  private plus10Years = 0;
  private hobbies = new Array<string>();
  private url = "";
  private img = "";
  private canNotClick = false;

  onclick(): void {
    this.name = "山田太郎";
    this.age = 31;
    this.plus10Years = this.age + 10;
    this.hobbies = ["スイム", "バイク", "ラン"];
    this.url = "https://www.rakus-partners.co.jp/";
    this.img = "/img/txt01_img_c_on.jpg";
    this.canNotClick = true;
  }
}
</script>

<style scoped>
.profile {
  border: solid;
  text-align: left;
  width: 200px;
}

img{
  width: 180px;
}
</style>
