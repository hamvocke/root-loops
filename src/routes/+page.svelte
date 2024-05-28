<script lang="ts">
  import Header from "./Header.svelte";
  import Slider from "./Slider.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import { prepare } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";

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
    <circle cx="100" cy="90" r="50" fill="${cereals.blue.color.toString()}" />
    <circle cx="60" cy="50" r="50" fill="${cereals.red.color.toString()}" />
  </svg>
    `.replace('"', "%22");
  }
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
  <link rel="icon" href="data:image/svg+xml,{favicon()}" />
</svelte:head>

<main style={cssColors}>
  <Header />

  <section class="input glass-box">
    <h2>Create your own terminal color scheme</h2>
    <p>
      Root Loops helps you generate custom terminal color schemes. Dark mode, light mode, vibrant or
      pale, you decide. Play around with the ingredients below and find a recipe you like. Each
      ingredient has a different effect on the cereals being created. You can use the generated
      colors for your personal terminal color scheme, for syntax highlighting, or anything you like.
    </p>

    <p><a href="/help" class="help-link">Learn more</a></p>
    <div class="sliders">
      <Slider label="Milk" id="milk-slider" min={0} max={3} bind:value={milk} />
      <Slider label="Sugar" id="sugar-slider" min={1} max={9} bind:value={sugar} />
      <Slider id="slider-flavor" label="Flavor" min={0} max={2} bind:value={flavor} />
      <Slider id="slider-colors" label="Artificial Colors" min={1} max={10} bind:value={colors} />
      <Slider id="slider-juice" label="Juice" min={0} max={360} bind:value={juice} />
      <Slider id="slider-sogginess" label="Sogginess" min={0} max={20} bind:value={sogginess} />
    </div>
  </section>

  <section class="bowl" aria-label="cereal bowl">
    <div class="glow"></div>
    <div class="bowl-content glass-box">
      <div class="milk" style={`height: ${milk * 33.34}%;`}></div>
      <div class="cereals">
        {#each Object.entries(cereals) as [_key, cereal]}
          <Cereal {cereal} />
        {/each}
      </div>
    </div>
  </section>

  <Terminal />
</main>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 1rem), 1200px);
    accent-color: var(--root-loops-ansi-red);
  }

  .input {
    margin: 2rem 0;
    padding: 1rem;

    h2 {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
      color: var(--color-slate-600);
      text-shadow: 0 1px 0 var(--color-slate-050);
    }

    .help-link {
      display: block;
      text-align: right;
      font-weight: bold;
    }
  }

  .glass-box {
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    border: 1px solid var(--color-slate-050);
    border-radius: var(--border-radius);
    box-shadow: 0 0.25rem 0.5rem #0001;
  }

  .sliders {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
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
    opacity: 1;
  }

  .bowl-content {
    position: relative;
    overflow: hidden;
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
    padding: 1rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    gap: 1.5rem;
  }
</style>
