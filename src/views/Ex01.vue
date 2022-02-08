<template>
  <div class="profile">
    <div>
      名前：{{ name }} <br />
      年齢：{{ age }}歳 <br />
      10年後の年齢：{{ age + 10 }} <br />
      趣味：
      <span v-for="hobby of hobbies" v-bind:key="hobby">
        {{ hobby }}
      </span>
    </div>
    <p><a v-bind:href="url">自社ページリンク</a></p>
    <img v-bind:src="img" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private name = "山田太郎";
  private age = 31;
  private hobbies = ["スイム", "バイク", "ラン"];
  private url = "https://www.rakus-partners.co.jp/";
  private img = "/img/txt01_img_c_on.jpg";
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
