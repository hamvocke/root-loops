<script lang="ts">
  import {
    pythonSnippet,
    typescriptSnippet,
    elixirSnippet,
    vitestSnippet,
    screenfetchSnippet,
  } from "$lib/snippets";
  import Code from "./Code.svelte";

  let activeTabId = "tab-screenfetch";
  function handleTabClick(event: MouseEvent) {
    activeTabId = (event.target as HTMLElement).id;
  }
</script>

<section class="terminal" aria-labelledby="window-title">
  <div class="window-decoration">
    <div class="circles">
      <span class="circle red"></span>
      <span class="circle yellow"></span>
      <span class="circle green"></span>
    </div>
    <h3 id="window-title">Terminal Preview</h3>
  </div>
  <div role="tablist" aria-labelledby="window-title">
    <button
      id="tab-screenfetch"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-screenfetch" ? "true" : "false"}
      on:click={handleTabClick}>screenfetch</button
    >
    <button
      id="tab-vitest"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-vitest" ? "true" : "false"}
      on:click={handleTabClick}>vitest</button
    >
    <button
      id="tab-python"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-python" ? "true" : "false"}
      on:click={handleTabClick}>python</button
    >
    <button
      id="tab-javascript"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-javascript" ? "true" : "false"}
      on:click={handleTabClick}>typescript</button
    >
    <button
      id="tab-elixir"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-elixir" ? "true" : "false"}
      on:click={handleTabClick}>elixir</button
    >
  </div>

  <div
    role="tabpanel"
    aria-labelledby="tab-screenfetch"
    class:hidden={activeTabId !== "tab-screenfetch"}
  >
    <Code command="screenfetch">{@html screenfetchSnippet}</Code>
  </div>

  <div role="tabpanel" aria-labelledby="tab-vitest" class:hidden={activeTabId !== "tab-vitest"}>
    <Code command="npm run test:unit">{@html vitestSnippet}</Code>
  </div>

  <div role="tabpanel" aria-labelledby="tab-python" class:hidden={activeTabId !== "tab-python"}>
    <Code command="bat -p --theme ansi python.py">{@html pythonSnippet}</Code>
  </div>

  <div
    role="tabpanel"
    aria-labelledby="tab-javascript"
    class:hidden={activeTabId !== "tab-javascript"}
  >
    <Code command="bat -p --theme ansi typescript.ts">{@html typescriptSnippet}</Code>
  </div>

  <div role="tabpanel" aria-labelledby="tab-elixir" class:hidden={activeTabId !== "tab-elixir"}>
    <Code command="bat -p --theme ansi elixir.ex">{@html elixirSnippet}</Code>
  </div>
</section>

<style>
  .terminal {
    font-family: system-io, sans-serif;
    font-size: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px #0001;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-slate-300);
    overflow: hidden;
    color: var(--color-slate-600);
    margin-bottom: 2rem;
  }

  .window-decoration {
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    font-weight: bold;
    text-shadow: 0 1px 0 var(--color-slate-050);
    padding: 0.75rem 0.5rem;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    border: 1px solid var(--color-slate-050);
    border-bottom: 1px solid var(--color-slate-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  .circles {
    position: absolute;
    left: 1rem;
    display: flex;
    gap: 0.75rem;
  }

  .circle {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: block;
    background: var(--circle-color);

    &.red {
      --circle-color: var(--root-loops-ansi-red);
    }

    &.yellow {
      --circle-color: var(--root-loops-ansi-yellow);
    }

    &.green {
      --circle-color: var(--root-loops-ansi-green);
    }
  }

  [role="tablist"] {
    display: flex;
  }

  button[role="tab"] {
    padding: 0.5rem 0.5rem;
    font-size: 0.9rem;
    background: color-mix(in oklch, var(--color-slate-200) 40%, transparent);
    color: var(--color-slate-700);
    display: block;
    flex: 1 0 auto;
    border-right: none;
    border-left: none;
    border-top: 1px solid var(--color-slate-050);
    border-bottom: 1px solid var(--color-slate-300);
    text-align: center;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background: color-mix(in oklch, var(--color-slate-300) 40%, transparent);
    }

    &:focus-visible {
      outline: 2px solid var(--root-loops-ansi-blue);
      outline-offset: -2px;
    }
  }

  button[role="tab"] + button[role="tab"] {
    border-left: 1px solid var(--color-slate-300);
  }

  button[aria-selected="true"] {
    background: var(--color-slate-100);
    border-bottom: 4px solid var(--root-loops-ansi-bright-red);
  }

  [role="tabpanel"] {
    background: var(--root-loops-background);
    padding: 1rem;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    font-family: monospace;
    font-size: 16px;
    line-height: 1rem;
    color: var(--root-loops-foreground);
    overflow-x: auto;
  }

  [role="tabpanel"].hidden {
    display: none;
  }
</style>
