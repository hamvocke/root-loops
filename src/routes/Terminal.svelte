<script lang="ts">
  import { neofetch } from "$lib/snippets";

  let activeTabId = "tab-bash";
  function handleTabClick(event: MouseEvent) {
    activeTabId = (event.target as HTMLElement).id;
  }
</script>

<div class="terminal">
  <div class="window-decoration">
    <div class="circles">
      <span class="circle red"></span>
      <span class="circle yellow"></span>
      <span class="circle green"></span>
    </div>
    <h3 id="window-title">Root Loops Terminal</h3>
  </div>
  <div role="tablist" aria-labelledby="window-title">
    <button
      id="tab-bash"
      type="button"
      role="tab"
      aria-selected={activeTabId == "tab-bash" ? "true" : "false"}
      on:click={handleTabClick}>bash</button
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
      on:click={handleTabClick}>javascript</button
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
    id="panel-bash"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-bash"
    class:hidden={activeTabId !== "tab-bash"}
  >
    <pre>
<span class="green">loops@cereal-box</span><span class="normal">:</span><span class="blue"
        >/home/loops</span
      ><span class="normal">$</span> npm run test

<span class="bg-blue black bold"> RERUN </span> src/lib/cereals.ts <span class="blue">x3</span>

<span class="green">✓</span> src/lib/cereals.test.ts (17)
 <span class="green">✓</span> prepare(defaultRecipe) (17)
   <span class="green">✓</span> generates colors in oklch space
   <span class="green">✓</span> generates base tone cereals with low chroma
   <span class="green">✓</span> generates red tone cereals with right hue
   <span class="green">✓</span> generates yellow tone cereals with right hue
   <span class="green">✓</span> generates green tone cereals with right hue
   <span class="green">✓</span> generates cyan tone cereals with right hue
   <span class="green">✓</span> generates blue tone cereals with right hue
   <span class="green">✓</span> generates magenta tone cereals with right hue
   <span class="green">✓</span> generates bright colors with higher lightness than regular colors
   <span class="green">✓</span> creates dark base colors for milk amount of 'None'
   <span class="green">✓</span> creates lighter base colors for milk amount of 'Splash'
   <span class="green">✓</span> creates light base colors for milk amount of 'Glug'
   <span class="green">✓</span> creates lightest base colors for milk amount of 'Cup'
   <span class="green">✓</span> ignores 'milk' parameter for accent colors
   <span class="green">✓</span> uses 'artificial colors' parameter to drive chroma of accent colors
   <span class="green">✓</span> uses 'flavor' parameter to drive hue shift of accent colors
   <span class="green">✓</span> uses 'sugar' parameter to drive lightness of accent colors

Test Files  <span class="green">1 passed</span> <span class="bright-black">(1)</span>
     Tests  <span class="green">17 passed</span> <span class="bright-black">(17)</span>
  Start at  12:54:53
  Duration  60ms


<span class="bg-green black bold"> PASS </span> <span class="green"
        >Waiting for file changes...</span
      >
       press h to show help, press q to quit
      </pre>
  </div>

  <div
    id="panel-python"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-python"
    class:hidden={activeTabId !== "tab-python"}
  >
    <pre>Hello python</pre>
  </div>
  <div
    id="panel-javascript"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-javascript"
    class:hidden={activeTabId !== "tab-javascript"}
  >
    <pre>Hello javascript</pre>
  </div>
  <div
    id="panel-elixir"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-elixir"
    class:hidden={activeTabId !== "tab-elixir"}
  >
    <pre>Hello elixir</pre>
  </div>
</div>

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
    background: color-mix(in oklch, var(--color-slate-200) 40%, transparent);
    color: var(--color-slate-700);
    display: block;
    flex: 1 0 auto;
    border-right: none;
    border-top: 1px solid var(--color-slate-050);
    border-bottom: 1px solid var(--color-slate-300);
    text-align: center;
    cursor: pointer;
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
    padding: 0 1rem;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    font-family: monospace;
    color: var(--root-loops-foreground);
  }

  [role="tabpanel"].hidden {
    display: none;
  }

  pre {
    background: inherit;
    color: inherit;
  }

  .blue {
    color: var(--root-loops-ansi-blue);
  }

  .green {
    color: var(--root-loops-ansi-green);
  }

  .black {
    color: var(--root-loops-background);
  }

  .bright-black {
    color: var(--root-loops-ansi-bright-black);
  }

  .normal {
    color: var(--root-loops-foreground);
    background: inherit;
  }

  .bg-blue {
    background: var(--root-loops-ansi-blue);
  }

  .bg-green {
    background: var(--root-loops-ansi-green);
  }

  .bold {
    font-weight: bold;
  }
</style>
