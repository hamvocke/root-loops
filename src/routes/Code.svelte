<script lang="ts">
  import { codeToHtml } from "shiki";

  const code = `
import { codeToTokens } from 'shiki'

const { tokens } = await codeToTokens ('<div class="foo">bar</div>', {
  lang : 'html',
  theme : 'min-dark'
})
  `;
  const html = codeToHtml(code, {
    lang: "javascript",
    theme: "rose-pine-dawn",
  });
</script>

<div class="code">
  {#await html}
    <p>Loading...</p>
  {:then html}
    {@html html}
  {:catch error}
    <p>Something went wrong. {error.message}</p>
  {/await}
</div>

<style>
</style>
