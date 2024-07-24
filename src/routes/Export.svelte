<script lang="ts">
  import { exportToJson } from "$lib/export";
  import type { Recipe } from "$lib/ingredients";
  import { ClipboardIcon } from "svelte-feather-icons";

  export let recipe: Recipe;
  $: code = exportToJson(recipe);

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }
</script>

<section class="glass-box" aria-labelledby="export-title">
  <h2 id="export-title">Export</h2>
  <button class="button primary" on:click={copyToClipboard}><ClipboardIcon size="20" /> Copy</button
  >
  <pre><code>{code}</code></pre>
</section>

<style>
  section {
    padding: 1rem;
    position: relative;
  }

  pre {
    font-family: "Fira TerminalContent", monospace;
    font-size: 14px;
    line-height: 1.25rem;
    color: var(--root-loops-foreground);
    overflow-x: auto;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  button {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
  }

  pre {
    background: var(--root-loops-background);
    padding: 1rem;
    border-radius: var(--border-radius);
  }
</style>
