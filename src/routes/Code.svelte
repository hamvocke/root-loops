<script lang="ts">
  import { createCssVariablesTheme, getHighlighter } from "shiki";

  const code = `
import { codeToTokens } from 'shiki'

const { tokens } = await codeToTokens ('<div class="foo">bar</div>', {
  lang : 'html',
  theme : 'min-dark'
})
  `;

  const rootLoopsScheme = createCssVariablesTheme({
    name: "root-loops",
    variablePrefix: "--root-loops-",
    variableDefaults: {},
    fontStyle: true,
  });

  const highlighter = getHighlighter({
    langs: ["javascript"],
    themes: [rootLoopsScheme],
  }).then((highlighter) =>
    highlighter.codeToHtml(code, {
      lang: "javascript",
      theme: "root-loops",
    }),
  );
</script>

{#await highlighter}
  <p>Loading...</p>
{:then html}
  {@html html}
{:catch error}
  <p>Something went wrong. {error.message}</p>
{/await}
