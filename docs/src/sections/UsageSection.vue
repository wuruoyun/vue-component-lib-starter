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
    <pre data-lang="javascript"><code class="javascript"><slot name="data"></slot></code></pre>
  </section>
</template>

<script>
export default {
  props: [ 'name', 'tag' ]
}
</script>

