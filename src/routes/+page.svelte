<script lang="ts">
  import Slider from "./Slider.svelte";
  import Code from "./Code.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import { prepare } from "$lib/cereals";
  import { javascriptSnippet, pythonSnippet, vitestSnippet, ansiSnippet } from "$lib/snippets";
  import { generateCssColors } from "$lib/css";
  import "@fontsource/luckiest-guy";

  let milk = 0;
  let flavor = 0;
  let colors = 6;
  let sugar = 7;
  let juice = 30;
  let sogginess = 2;

  $: cereals = prepare({
    milkAmount: milk,
    flavor: flavor,
    artificialColors: colors,
    sugar: sugar,
    juice: juice,
    sogginess: sogginess / 100,
  });
  $: cssColors = generateCssColors(cereals);

  function favicon() {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
    <circle cx="100" cy="90" r="50" fill="${cereals.blue.toString()}" />
    <circle cx="60" cy="50" r="50" fill="${cereals.red.toString()}" />
  </svg>
    `.replace('"', "%22");
  }
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="A code & terminal color scheme for cereal lovers." />
  <link rel="icon" href="data:image/svg+xml,{favicon()}" />
</svelte:head>

<main style={cssColors}>
  <header>
    <div class="label">
      <h1>
        R<span class="green">o</span><span class="magenta">o</span>t <br /> L<span class="blue"
          >o</span
        ><span class="yellow">o</span>ps
      </h1>
      <p class="caption">A terminal color scheme generator for cereal lovers.</p>
    </div>
  </header>

  <section class="sliders">
    <Slider id="slider-milk" label="Milk" min="0" max="3" bind:value={milk} />
    <Slider id="slider-flavor" label="Flavor" min="0" max="2" bind:value={flavor} />
    <Slider id="slider-sugar" label="Sugar" min="1" max="9" bind:value={sugar} />
    <Slider id="slider-colors" label="Artificial Colors" min="1" max="10" bind:value={colors} />
    <Slider id="slider-juice" label="Juice" min="0" max="360" bind:value={juice} />
    <Slider id="slider-sogginess" label="Sogginess" min="0" max="20" bind:value={sogginess} />
  </section>

  <section class="bowl">
    <div class="glow"></div>
    <div class="bowl-content">
      <div class="milk" style={`height: ${milk * 33.34}%;`}></div>
      <div class="cereals">
        {#each Object.entries(cereals) as [_key, color]}
          <Cereal {color} />
        {/each}
      </div>
    </div>
  </section>

  <Terminal />

  <section class="samples">
    <Code source={javascriptSnippet} language="javascript" />
    <Code source={pythonSnippet} language="python" />
    <Code source={vitestSnippet} language="ansi" />
    <Code source={ansiSnippet} language="ansi" />
  </section>
</main>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 2rem), 1200px);
  }

  header {
    text-align: center;
    color: var(--color-slate-050);
  }

  header .label {
    background: radial-gradient(
      farthest-corner at 50% 20px,
      var(--color-red-400) 0%,
      var(--color-red-700) 70%,
      var(--color-red-900) 100%
    );
    display: inline-block;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    border: 0.2rem solid var(--color-red-100);
    outline: 0.4rem solid var(--color-red-800);
    border-top: none;
    box-shadow: 0 8px 16px #0004;
  }

  h1 {
    font-size: clamp(5rem, 8vw + 2rem, 7rem);
    text-transform: uppercase;
    font-weight: 900;
    margin: 1rem 0 0.5rem 0;
    font-family: "Luckiest Guy", system-ui;
    color: var(--color);
    letter-spacing: 1px;
    line-height: 0.8em;
  }

  h1,
  .green,
  .magenta,
  .blue,
  .yellow {
    color: var(--color);
    text-shadow:
      0 -1px 0 var(--highlight),
      0 1px 0 var(--darker-shade),
      0 1px 0 var(--shade),
      0 2px 0 var(--shade),
      0 3px 0 var(--shade),
      0 4px 0 var(--shade),
      0 5px 0 var(--shade),
      0 6px 0 var(--shade),
      0 7px 0 var(--shade),
      0 0.75rem 0.5rem #0006,
      0 1rem 2rem #0004,
      0 1rem 3rem #0002;
  }

  h1 {
    --color: var(--color-slate-050);
    --shade: color-mix(in srgb, var(--color) 70%, black);
    --highlight: color-mix(in srgb, var(--color) 50%, white);
    --darker-shade: color-mix(in srgb, var(--color) 70%, black);
  }

  .green {
    --color: var(--root-loops-ansi-bright-green);
    --shade: color-mix(in oklch, var(--color) 80%, black);
    --highlight: color-mix(in oklch, var(--color) 50%, white);
    --darker-shade: color-mix(in oklch, var(--color) 90%, black);
  }

  .magenta {
    --color: var(--root-loops-ansi-bright-magenta);
    --shade: color-mix(in oklch, var(--color) 80%, black);
    --highlight: color-mix(in oklch, var(--color) 50%, white);
    --darker-shade: color-mix(in oklch, var(--color) 90%, black);
  }

  .blue {
    --color: var(--root-loops-ansi-bright-blue);
    --shade: color-mix(in oklch, var(--color) 80%, black);
    --highlight: color-mix(in oklch, var(--color) 50%, white);
    --darker-shade: color-mix(in oklch, var(--color) 90%, black);
  }

  .yellow {
    --color: var(--root-loops-ansi-bright-yellow);
    --shade: color-mix(in oklch, var(--color) 80%, black);
    --highlight: color-mix(in oklch, var(--color) 50%, white);
    --darker-shade: color-mix(in oklch, var(--color) 90%, black);
  }

  .caption {
    margin: 0;
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1em;
  }

  .bowl {
    position: relative;
    margin: 2rem 0;
  }

  .glow {
    background: conic-gradient(
      from -90deg,
      var(--root-loops-ansi-bright-red),
      var(--root-loops-ansi-bright-green),
      var(--root-loops-ansi-bright-yellow),
      var(--root-loops-ansi-bright-blue),
      var(--root-loops-ansi-bright-magenta),
      var(--root-loops-ansi-bright-cyan)
    );
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    filter: blur(64px);
    opacity: 0.9;
  }

  .bowl-content {
    position: relative;
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    border: 1px solid var(--color-slate-050);
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0.25rem 0.5rem #0001;
  }

  .milk {
    background: white;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    transition: height 0.5s ease-out;
  }

  .cereals {
    position: relative;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(8, 1fr);
    grid-auto-flow: column;
    gap: 1rem;

    @media screen and (min-width: 640px) {
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
  }
</style>
