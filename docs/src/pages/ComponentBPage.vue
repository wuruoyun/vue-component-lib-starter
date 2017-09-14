<template>
  <div>
    <h1>Component B</h1>
    <p>The description for Component B goes here.</p>
    <component-b @click="onClick"/>
    <usage-section name="ComponentB" tag="component-b">
      <span slot="template">&lt;component-b @click="onClick"/></span>
      <span slot="script">methods: {
  onClick(value) {
    alert("Component B has value: " + value);
  }
}</span>
    </usage-section>
  </div>
</template>

<script>
import { ComponentB } from 'mylib';
import UsageSection from '../sections/UsageSection.vue';
import PropsSection from '../sections/PropsSection.vue';

export default {
  methods: {
    onClick(value) {
      alert("Component B has value: " + value);
    }
  },
  components: {
    'component-b': ComponentB,
    'usage-section': UsageSection,
    'props-section': PropsSection
  }
}
</script>

