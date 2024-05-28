<script lang="ts">
  import Header from "./Header.svelte";
  import Slider from "./Slider.svelte";
  import Select from "./Select.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import { prepare, defaultRecipe, Flavor, MilkAmount, Juice } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";

  let milk = defaultRecipe.milkAmount;
  let flavor = defaultRecipe.flavor;
  let artificialColors = defaultRecipe.artificialColors;
  let sugar = defaultRecipe.sugar;
  let juice = defaultRecipe.juice;
  let sogginess = defaultRecipe.sogginess;

  $: cereals = prepare({
    milkAmount: milk,
    flavor: flavor,
    artificialColors: artificialColors,
    sugar: sugar,
    juice: juice,
    sogginess: sogginess,
  });
  $: cssColors = generateCssColors(cereals);

  function calculateMilkHeight(amount: MilkAmount) {
    const height = (amount: number) => `height: ${amount * 33.34}%;`;

    switch (amount) {
      case MilkAmount.None:
        return height(0);
      case MilkAmount.Splash:
        return height(1);
      case MilkAmount.Glug:
        return height(2);
      case MilkAmount.Cup:
        return height(3);
    }
  }
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
  <link rel="icon" href={faviconDataUrl(cereals)} />
</svelte:head>

<main style={cssColors}>
  <Header />

  <section class="input">
    <div class="text">
      <h2>Your own terminal color scheme, as simple as making a bowl of cereals</h2>
      <p>
        Root Loops helps you generate tasty color schemes that you can use for terminal emulators,
        syntax highlighting, or whatever else you fancy. Dark mode, light mode, vibrant or pale, you
        decide. Play around with the ingredients below and find a recipe you like. Each ingredient
        has a different effect on the color scheme being created.
      </p>
      <div class="links"><a href="/help">Learn more</a></div>
    </div>
    <div class="sliders">
      <div>
        <Slider label="Sugar" id="sugar-slider" min={1} max={9} bind:value={sugar} />
        <Slider
          id="slider-colors"
          label="Artificial Colors"
          min={0}
          max={10}
          bind:value={artificialColors}
        />
        <Slider id="slider-sogginess" label="Sogginess" min={0} max={10} bind:value={sogginess} />
      </div>
      <div>
        <Select
          id="flavor"
          label="Cereal Flavor"
          values={Object.values(Flavor)}
          bind:value={flavor}
        />
        <Select id="juice" label="Juice" values={Object.values(Juice)} bind:value={juice} />
        <Select id="milk" label="Milk" values={Object.values(MilkAmount)} bind:value={milk} />
      </div>
    </div>
  </section>

  <section class="bowl" aria-label="cereal bowl">
    <div class="glow"></div>
    <div class="bowl-content glass-box">
      <div class="milk" style={calculateMilkHeight(milk)}></div>
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
    width: min(calc(100% - 2rem), 1200px);
    accent-color: var(--root-loops-ansi-red);
  }

  .input {
    margin: 3rem 0 2rem 0;

    .text {
      max-width: 90ch;
      margin: auto;
    }

    h2 {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
      color: var(--color-slate-600);
      text-shadow: 0 1px 0 var(--color-slate-050);
    }

    .links {
      width: 100%;
      text-align: right;
      font-weight: bold;
    }
  }

  .sliders {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (min-width: 640px) {
      flex-direction: column;
    }
  }

  .sliders div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (min-width: 640px) {
      flex-direction: row;
      gap: 4rem;
      justify-content: center;
    }
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
    z-index: -1;
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
