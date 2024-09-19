<script lang="ts">
  import {
    pythonSnippet,
    typescriptSnippet,
    elixirSnippet,
    vitestSnippet,
    screenfetchSnippet,
    rustSnippet,
  } from "$lib/snippets";
  import Window from "./Window.svelte";
  import TerminalContent from "./TerminalContent.svelte";

  let activeTabId = "tab-screenfetch";
  function handleTabClick(event: MouseEvent) {
    activeTabId = (event.target as HTMLElement).id;
  }
</script>

<Window id="terminal-window" title="Terminal Preview">
  <div role="tablist" aria-labelledby="window-title">
    <button
      id="tab-screenfetch"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-screenfetch" ? "true" : "false"}
      on:click={handleTabClick}>fetch</button
    >
    <button
      id="tab-vitest"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-vitest" ? "true" : "false"}
      on:click={handleTabClick}>test</button
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
    <button
      id="tab-rust"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-rust" ? "true" : "false"}
      on:click={handleTabClick}>rust</button
    >
  </div>

  <div
    role="tabpanel"
    aria-labelledby="tab-screenfetch"
    class:hidden={activeTabId !== "tab-screenfetch"}
  >
    <TerminalContent command="screenfetch">{@html screenfetchSnippet}</TerminalContent>
  </div>

  <div role="tabpanel" aria-labelledby="tab-vitest" class:hidden={activeTabId !== "tab-vitest"}>
    <TerminalContent command="npm run test:unit">{@html vitestSnippet}</TerminalContent>
  </div>

  <div role="tabpanel" aria-labelledby="tab-python" class:hidden={activeTabId !== "tab-python"}>
    <TerminalContent command="bat -p --theme ansi python.py">{@html pythonSnippet}</TerminalContent>
  </div>

  <div
    role="tabpanel"
    aria-labelledby="tab-javascript"
    class:hidden={activeTabId !== "tab-javascript"}
  >
    <TerminalContent command="bat -p --theme ansi typescript.ts"
      >{@html typescriptSnippet}</TerminalContent
    >
  </div>

  <div role="tabpanel" aria-labelledby="tab-elixir" class:hidden={activeTabId !== "tab-elixir"}>
    <TerminalContent command="bat -p --theme ansi elixir.ex">{@html elixirSnippet}</TerminalContent>
  </div>

  <div role="tabpanel" aria-labelledby="tab-rust" class:hidden={activeTabId !== "tab-rust"}>
    <TerminalContent command="bat -p --theme ansi rust.rs">{@html rustSnippet}</TerminalContent>
  </div>
</Window>

<style>
  [role="tablist"] {
    display: flex;
  }

  button[role="tab"] {
    padding: 0.5rem 0.5rem;
    font-size: 0.9rem;
    background: color-mix(in hsl, var(--color-slate-200) 40%, transparent);
    color: var(--color-slate-800);
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
      background: color-mix(in hsl, var(--color-slate-300) 40%, transparent);
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
    font-family: "Fira TerminalContent", monospace;
    font-size: 14px;
    font-weight: 400;
    color: var(--root-loops-foreground);
    overflow-x: auto;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  [role="tabpanel"].hidden {
    display: none;
  }
</style>
