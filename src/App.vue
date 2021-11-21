<template>
  <div id="app">
    <img src="./logo.svg" />
    <h1>Hello
      <a href="https://github.com/JuniorTour/vue-template-babel-compiler/">vue-template-babel-compiler</a> and
      <a href='https://github.com/vueuse/vueuse' target='__blank'>VueUse</a>!
    </h1>

    <h2 v-if="optional?.chaining">
      Optional Chaining enabled: {{optional?.chaining}}
    </h2>
    <h3 @click="() => {debugger}">Mouse: {{x}} x {{y}}</h3>
    <h3>
      Counter: {{count}}
      <a @click='inc()' style='margin-right:10px'>+</a>
      <a @click='dec()'>-</a>
    </h3>

    <br/><br/>
    <p><a href='https://github.com/JuniorTour/vue-template-babel-compiler/issues/22' target='__blank'>Source: JuniorTour/vue-template-babel-compiler</a></p>
  </div>
</template>

<script setup lang="ts">
import { useMouse, useCounter } from '@vueuse/core'
const { x, y } = useMouse()
const { count, inc, dec } = useCounter()

const optional = {
  chaining: true,
}

function log() {
  /* eslint-disable no-debugger */
  debugger
  console.log('msg')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif&display=swap');

html, body, h1, h2, h3, p {
  font-family: 'Noto Serif', serif;
  user-select: none;
}

#app {
  text-align: center;
  color: rgba(0,0,0,0.4);
}
img {
  width: 500px;
}
a {
  color: #41b883;
  text-decoration: none;
  cursor: pointer;
}
</style>
