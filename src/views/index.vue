<!--
 * @Author: guliangbin
 * @Date: 2022-06-15 16:56:36
 * @LastEditors: guliangbin
 * @LastEditTime: 2022-11-30 10:15:12
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";


const conut = ref(0);
const testFunc = (type = '-') => {
    if (type === '-' && conut.value > 0) {
      conut.value--;
    } else if (type === '+') {
      conut.value++;
    }
};
const inputVal = ref('')
const inputFunc = () => {
    console.log(inputVal.value)
}

</script>

<template>
  <div class="home-index">
    <el-button type="primary" v-debounce:500="testFunc">-</el-button>
    <div class="home-index__conut">
      {{ conut }}
    </div>
    <el-button type="primary" v-throttle:500="() => testFunc('+')">+</el-button>
    <el-input style="width: 200px;" v-model="inputVal" v-debounce:500.input="inputFunc"/>
  </div>
</template>

<style lang="scss" scoped>
@mixin dis-center {
  display: flex;
  justify-content: center;
  align-itens: center;
}
.home-index {
  @include dis-center;
  width: 100%;
  height: 100%;
  // background-color: #2c3e50;
  &__conut {
    width: 50px;
    // color:
    // 渐变背景色
    background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    // 投影
    box-shadow: 0 0 0 1px #f6d365;
  }
}
</style>
