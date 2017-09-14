<template>
  <div>
    <h1>Component A</h1>
    <p>The description for Component A goes here.</p>
    <component-a :msg="msg"/>
    <usage-section name="ComponentA" tag="component-a">
      <span slot="template">&lt;component-a :msg="msg"/&gt;</span>
      <span slot="data">msg: 'Greeting'</span>
    </usage-section>
    <props-section :props="props" />
  </div>
</template>

<script>
import { ComponentA } from 'mylib';
import UsageSection from '../sections/UsageSection.vue';
import PropsSection from '../sections/PropsSection.vue';

export default {
  data() {
    return {
      props: [
        ['msg', 'A message for Component A', 'String', '-', 'Hello World!']
      ],
      msg: 'Greeting'
    }
  },
  components: {
    'component-a': ComponentA,
    'usage-section': UsageSection,
    'props-section': PropsSection
  }
}
</script>

