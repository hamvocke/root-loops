<script lang="ts">
  import {
    exportToJson,
    exportToWindowsTerminal,
    exportToAlacritty,
    exportToXresources,
    exportToKitty,
    exportToWezTerm,
  } from "$lib/export";
  import { ExportFormat, exportSelectOptions } from "$lib/exporters/exportOptions";
  import type { Recipe } from "$lib/ingredients";
  import Window from "./Window.svelte";
  import Select from "./Select.svelte";
  import { ClipboardIcon } from "svelte-feather-icons";
  import { CheckIcon } from "svelte-feather-icons";

  export let recipe: Recipe;
  let selectedExportFormat: ExportFormat;

  $: code = generateExportSnippet(recipe, selectedExportFormat);

  let icon = ClipboardIcon;
  let buttonText = "Copy";

  function generateExportSnippet(recipe: Recipe, selectedExportFormat: ExportFormat) {
    switch (selectedExportFormat) {
      case ExportFormat.JSON:
        return exportToJson(recipe);
      case ExportFormat.WindowsTerminal:
        return exportToWindowsTerminal(recipe);
      case ExportFormat.Alacritty:
        return exportToAlacritty(recipe);
      case ExportFormat.XResources:
        return exportToXresources(recipe);
      case ExportFormat.Kitty:
        return exportToKitty(recipe);
      case ExportFormat.WezTerm:
        return exportToWezTerm(recipe);
      default:
        return exportToJson(recipe);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(code);

    icon = CheckIcon;
    buttonText = "Copied";

    setTimeout(() => {
      icon = ClipboardIcon;
      buttonText = "Copy";
    }, 2000);
  }
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
  <div class="export-snippet">
    <pre><code>{code}</code></pre>

    <button class="button primary" on:click={copyToClipboard}
      ><svelte:component this={icon} size="20" /> {buttonText}</button
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
    margin: 0;
    background: var(--root-loops-background);
    padding: 0 1rem;
    border-top: 1px solid var(--color-slate-050);
    position: relative;
  }

  pre {
    font-family: "Fira TerminalContent", monospace;
    font-size: 14px;
    line-height: 1.25rem;
    color: var(--root-loops-foreground);
    overflow: auto;
    max-height: 400px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
</style>
