<script lang="ts">
  import { exportSelectOptions } from "$lib/export/options";
  import { type Format, exporters } from "$lib/export/formats";
  import type { Recipe } from "$lib/ingredients";
  import Window from "./Window.svelte";
  import Select from "./Select.svelte";
  import { ClipboardIcon } from "svelte-feather-icons";
  import { CheckIcon } from "svelte-feather-icons";

  interface Props {
    recipe: Recipe;
  }

  let { recipe }: Props = $props();
  let selectedExportFormat: Format = $state("JSON");

  let icon = $state(ClipboardIcon);
  let buttonText = $state("Copy");

  function generateExportSnippet(recipe: Recipe, exportFormat: Format): string | undefined {
    if (!selectedExportFormat) {
      return;
    }
    return exporters[exportFormat].export(recipe);
  }

  function copyToClipboard() {
    if (code) {
      navigator.clipboard.writeText(code);
    }

    icon = CheckIcon;
    buttonText = "Copied";

    setTimeout(() => {
      icon = ClipboardIcon;
      buttonText = "Copy";
    }, 2000);
  }
  let code = $derived(generateExportSnippet(recipe, selectedExportFormat));
</script>

<Window id="export-window" title="Export">
  <div class="content">
    <div>
      <p class="lead">Wow, that's a gorgeous color scheme you've got there 😍!</p>
      <p>
        Export it to your terminal emulator of choice by copying the snippet below and pasting it
        into your terminal emulator's configuration file. If your favorite terminal emulator isn't
        supported yet, you can copy the individual colors by clicking on the cereals above.
      </p>
    </div>
    <Select
      id="export-format"
      options={exportSelectOptions}
      bind:value={selectedExportFormat}
      label="Export to..."
    />
  </div>
  {@const SvelteComponent = icon}
  <div class="export-snippet">
    <pre><code>{code}</code></pre>

    <button class="button primary" onclick={copyToClipboard}
      ><SvelteComponent size="20" /> {buttonText}</button
    >
  </div>
</Window>

<style>
  .content {
    background: color-mix(in hsl, var(--color-slate-200) 60%, transparent);
    border-top: 1px solid var(--color-slate-100);
    padding: 2rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 4rem;
    }
  }

  .lead {
    margin-top: 0;
    font-size: 1.1rem;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .export-snippet {
    margin: 1rem;
    border-radius: 0.5rem;
    background: var(--root-loops-background);
    padding: 0 1rem;
    box-shadow: inset 0px 0px 6px #00000017;
    border-top: 1px solid var(--color-slate-300);
    border-left: 1px solid var(--color-slate-300);
    border-right: 1px solid var(--color-slate-050);
    border-bottom: 1px solid var(--color-slate-050);
    position: relative;
  }

  pre {
    font-family: "Fira Code Variable", monospace;
    font-size: 14px;
    line-height: 1.25rem;
    color: var(--root-loops-foreground);
    max-height: 600px;
    overflow: auto;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
</style>
