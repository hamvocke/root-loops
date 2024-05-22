<script lang="ts">
  import { createCssVariablesTheme, getHighlighter } from "shiki";

  export let source: string;
  export let language = "javascript";
  export let command: string | undefined;

  const prompt = `[0m[32mloops@cereal[0m:[0m[34m~/dev/root-loops[0m$`;

  function sourceWithPrompt(command: string | undefined): string {
    if (!command) {
      return source;
    }

    return `${prompt} ${command}

${source}`;
  }

  const rootLoopsScheme = createCssVariablesTheme({
    name: "root-loops",
    variablePrefix: "--root-loops-",
    variableDefaults: {},
    fontStyle: true,
  });

  const highlighter = getHighlighter({
    langs: [language],
    themes: [rootLoopsScheme],
  }).then((highlighter) =>
    highlighter.codeToHtml(sourceWithPrompt(command), {
      lang: language,
      theme: "root-loops",
    }),
  );
</script>

{#await highlighter}
  <pre>root@loops:~/dev/root-loops$ Loading code sample... <span class="blink">█</span></pre>
{:then html}
  {@html html}
{:catch error}
  <p>Something went wrong. {error.message}</p>
{/await}

<style>
  .blink {
    animation: blink 300ms infinite alternate;
  }

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
