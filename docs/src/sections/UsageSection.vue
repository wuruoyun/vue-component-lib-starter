<template>
  <section>
    <h2>Usage</h2>
    <div>
      <p>Assuming
        <code>{{name}}</code> is registered as component
        <code>{{tag}}</code>, your template may contain: </p>
      <pre data-lang="html"><code class="html"><slot name="template"></slot></code></pre>
    </div>
    <p>The
      <code>data</code> of your component may contain:</p>
    <pre v-prism data-lang="js"><code class="language-javascript"><slot name="data"></slot></code></pre>
  </section>
</template>

<script>
import Prism from '../directives/Prism';

export default {
  props: [ 'name', 'tag' ],
  directives: {
    'prism': Prism
  }
}
</script>

