<template>
  <div>
    <h1>Quick Start</h1>
    <p>Clone the Git repository of this library and link it.</p>
    <pre v-pre data-lang="bash"><code class="lang-bash">git clone [your Git repostiory]
cd mylib
npm install
npm run build
npm link</code></pre>
    <p>In your client project root folder:</p>
    <pre v-pre data-lang="bash"><code class="lang-bash">npm link mylib</code></pre>
  </div>
</template>
