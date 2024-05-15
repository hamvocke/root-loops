<script lang="ts">
  import Slider from "./Slider.svelte";
  import Code from "./Code.svelte";
  import { prepare } from "$lib/cereals";
  import { javascriptSnippet, pythonSnippet, ansiSnippet } from "$lib/snippets";
  import { generateCssColors } from "$lib/css";
  import "@fontsource/luckiest-guy";

  let milk = 3;
  let flavor = 0;
  let colors = 6;
  let sugar = 7;

  $: cereals = prepare({
    milkAmount: milk,
    flavor: flavor,
    artificialColors: colors,
    sugar: sugar,
  });
  $: cssColors = generateCssColors(cereals);
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="A code & terminal color scheme for cereal lovers." />
</svelte:head>

<div class="app" style={cssColors}>
  <main>
    <header>
      <h1>
        R<span class="green">o</span><span class="magenta">o</span>t <br /> L<span class="blue"
          >o</span
        ><span class="yellow">o</span>ps
      </h1>
      <p class="caption">A code & terminal color scheme generator for cereal lovers.</p>
    </header>

    <section class="bowl">
      {#each Object.entries(cereals) as [_key, color]}
        <div class="wrapper">
          <div class="cereal" style="--color: {color}"></div>
          <span class="color-value">{color}</span>
          {#if !color.inGamut("srgb")}<span title="Not in srgb gamut">⚠️</span>{/if}
        </div>
      {/each}
    </section>

    <section class="sliders">
      <Slider id="slider-milk" label="Milk" min="0" max="3" bind:value={milk} />
      <Slider id="slider-flavor" label="Flavor" min="0" max="2" bind:value={flavor} />
      <Slider id="slider-sugar" label="Sugar" min="1" max="9" bind:value={sugar} />
      <Slider id="slider-colors" label="Artificial Colors" min="0" max="10" bind:value={colors} />
    </section>

    <section class="samples">
      <Code source={javascriptSnippet} language="javascript" />
      <Code source={pythonSnippet} language="python" />
      <Code source={ansiSnippet} language="ansi" />
    </section>
  </main>
</div>

<style>
  .app {
    background: var(--root-loops-background);
    color: var(--root-loops-foreground);
    width: 100%;
  }

  main {
    margin: auto;
    width: min(calc(100% - 2rem), 1200px);
  }

  header {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 7rem;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0.5rem;
    font-family: "Luckiest Guy", system-ui;
    color: white;
    letter-spacing: 1px;
    line-height: 0.8em;
    text-shadow:
      -1px -1px 0 #444,
      0px -1px 0 #444,
      -1px 0px 0 #444,
      0px 1px 0 #444,
      1px 1px 0 #444,
      2px 2px 0 #444,
      3px 3px 0 #444,
      4px 4px 0 #ddd,
      5px 5px 0 #ddd,
      6px 6px 0 #ddd,
      7px 7px 0 #ddd,
      8px 8px 0 #ddd,
      0px 3px 10px #999a;
  }

  .caption {
    margin-top: 0;
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
  }

  .bowl {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .cereal {
    box-sizing: border-box;
    height: clamp(3rem, 9vw, 128px);
    width: clamp(3rem, 9vw, 128px);
    border-radius: 50%;
    border: 3rem solid var(--color);
  }

  .green {
    color: var(--root-loops-ansi-bright-green);
  }

  .magenta {
    color: var(--root-loops-ansi-bright-magenta);
  }

  .blue {
    color: var(--root-loops-ansi-bright-blue);
  }

  .yellow {
    color: var(--root-loops-ansi-bright-yellow);
  }

  .color-value {
    font-family: monospace;
    font-size: 0.9em;
  }
</style>
