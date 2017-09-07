<template>
  <div id="app">
    <h1>My Vue Components</h1>
    <my-component></my-component>
    <hr>
    <test-component></test-component>
  </div>
</template>

<script>
import { MyComponent } from 'mylib';
import TestComponent from './components/TestComponent.vue';

export default {
  components: {
    'my-component': MyComponent,
    'test-component': TestComponent
  }
}
</script>

<style>

</style>