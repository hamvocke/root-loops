<script lang="ts">
  import Header from "./Header.svelte";
  import Slider from "./Slider.svelte";
  import Select from "./Select.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import { prepare, defaultRecipe, Flavor, MilkAmount, Juice } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";
  import Footer from "./Footer.svelte";
  import { HelpCircleIcon, ShareIcon } from "svelte-feather-icons";

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

<div class="color-scope" style={cssColors}>
  <Header />

  <main>
    <section class="input">
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
    </section>

    <div class="buttons">
      <a class="button plain" href="/help"><HelpCircleIcon size="20" /> Help</a>
      <button class="primary"><ShareIcon size="20" /> Share</button>
    </div>

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

  <Footer />
</div>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 2rem), 1200px);
    accent-color: var(--root-loops-ansi-red);
  }

  .input {
    margin: 3rem 0 2rem 0;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: column;
    }
  }

  .input div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (min-width: 768px) {
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
    filter: blur(48px);
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
    gap: 1rem;
  }

  .buttons {
    display: flex;
    margin: 2rem 0;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  button,
  .button {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding: 0.6rem 0.8rem;
    border-radius: var(--border-radius);
    background: var(--color-slate-200);
    font-weight: bold;
    box-shadow: 0 0.25rem 0.5rem #0002;
    cursor: pointer;
    transition: all 0.1s ease-out;

    &.primary {
      background: var(--color-red-700);
      border: 2px solid var(--color-red-800);
      color: var(--color-red-050);

      &:hover,
      &:focus-visible {
        border-color: var(--color-red-900);
        background: var(--color-red-800);
      }
    }

    &.plain {
      color: var(--color-slate-700);
      text-decoration: none;
      background: transparent;
      box-shadow: none;

      &:hover,
      &:focus-visible {
        color: var(--color-slate-800);
        text-decoration: underline;
      }
    }
  }
</style>
