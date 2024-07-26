<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Slider from "./Slider.svelte";
  import Select from "./Select.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import Export from "./Export.svelte";
  import {
    defaultRecipe,
    MilkAmount,
    milkSelectOptions,
    fruitSelectOptions,
    flavorSelectOptions,
    validationRules,
    fromQueryString,
    toQueryString,
  } from "$lib/ingredients";
  import { prepare } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";
  import { HelpCircleIcon, CheckCircleIcon, ExternalLinkIcon } from "svelte-feather-icons";
  import { fade } from "svelte/transition";

  let recipe = defaultRecipe;

  onMount(() => {
    // eslint-disable-next-line svelte/valid-compile
    recipe = fromQueryString($page.url.searchParams);
  });

  let toast: string | undefined;

  $: cereals = prepare(recipe);
  $: cssColors = generateCssColors(cereals);
  $: queryString = toQueryString(recipe);

  function calculateMilkHeight(amount: MilkAmount) {
    return `height: ${amount * 33.34}%;`;
  }

  function saveUrl() {
    const showNotification = () => {
      toast = "Recipe saved. You can now bookmark and share this URL.";
      setTimeout(() => (toast = undefined), 4000);
    };

    const url = `${document.location.origin}?${queryString}`;

    navigator.clipboard.writeText(url);

    showNotification();
  }
</script>

<svelte:head>
  <link rel="icon" href={faviconDataUrl(cereals)} type="image/svg+xml" />
</svelte:head>

<div class="color-scope" style={cssColors}>
  <Header />

  <div class="toasts" aria-live="polite">
    {#if toast}
      <div class="notification" role="alert" transition:fade={{ duration: 200 }}>
        <CheckCircleIcon size="20" />
        {toast}
      </div>
    {/if}
  </div>

  <main>
    <form on:submit={saveUrl} data-sveltekit-replacestate>
      <div class="input">
        <Slider
          label="Sugar"
          id={validationRules.sugar.name}
          min={validationRules.sugar.minValue}
          max={validationRules.sugar.maxValue}
          bind:value={recipe.sugar}
        />
        <Slider
          label="Artificial Colors"
          id={validationRules.artificialColors.name}
          min={validationRules.artificialColors.minValue}
          max={validationRules.artificialColors.maxValue}
          bind:value={recipe.artificialColors}
        />
        <Slider
          label="Sogginess"
          id={validationRules.sogginess.name}
          min={validationRules.sogginess.minValue}
          max={validationRules.sogginess.maxValue}
          bind:value={recipe.sogginess}
        />

        <Select
          label="Cereal Flavor"
          id={validationRules.flavor.name}
          options={flavorSelectOptions}
          bind:value={recipe.flavor}
        />
        <Select
          label="Fruit"
          id={validationRules.fruit.name}
          options={fruitSelectOptions}
          bind:value={recipe.fruit}
        />
        <Select
          label="Milk"
          id={validationRules.milk.name}
          options={milkSelectOptions}
          bind:value={recipe.milkAmount}
        />
      </div>

      <div class="buttons">
        <a class="button plain" href="/help" data-sveltekit-replacestate="false"
          ><HelpCircleIcon size="20" /> Help</a
        >
        <button type="submit" class="button primary">
          <ExternalLinkIcon size="20" /> Save
        </button>
      </div>
    </form>

    <section class="bowl feature" aria-label="Cereal Bowl">
      <div class="glow"></div>
      <div class="bowl-content glass-box">
        <div class="milk" style={calculateMilkHeight(recipe.milkAmount)}></div>
        <div class="cereals">
          {#each Object.entries(cereals) as [_key, cereal]}
            <Cereal {cereal} />
          {/each}
        </div>
      </div>
    </section>

    <div class="loops-background full">
      <div class="content">
        <Terminal />
        <Export {recipe} />
        <Footer />
      </div>
    </div>
  </main>
</div>

<style>
  main {
    --gap: clamp(1rem, 6vw, 3rem);
    --full: minmax(var(--gap), 1fr);
    --content: min(1000px, 100% - var(--gap) * 2);
    --feature: minmax(0, 5rem);

    display: grid;
    grid-template-columns:
      [full-start] var(--full)
      [feature-start] var(--feature)
      [content-start] var(--content) [content-end]
      var(--feature) [feature-end]
      var(--full) [full-end];
    accent-color: var(--root-loops-ansi-red);
  }

  main > *,
  .content,
  .full .content {
    grid-column: content;
  }

  main > .full {
    grid-column: full;
    display: grid;
    grid-template-columns: subgrid;
  }

  main > .feature {
    grid-column: feature;
  }

  .toasts {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .notification {
    background: var(--color-emerald-400);
    padding: 0.5rem 0.75rem;
    color: var(--color-emerald-950);
    border-radius: 0.5rem;
    border: 2px solid var(--color-emerald-500);
    box-shadow: 0 0.25rem 0.5rem #0003;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input {
    margin: 3rem auto 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(160px, 1fr));
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: row;
    }
  }

  .bowl {
    position: relative;
    margin-bottom: 1rem;
  }

  .glow {
    background: linear-gradient(
      to right,
      color-mix(in hsl, var(--root-loops-ansi-bright-black) 30%, transparent),
      var(--root-loops-ansi-red),
      var(--root-loops-ansi-green),
      var(--root-loops-ansi-yellow),
      var(--root-loops-ansi-blue),
      var(--root-loops-ansi-magenta),
      var(--root-loops-ansi-cyan),
      color-mix(in hsl, var(--root-loops-ansi-white) 30%, transparent)
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
    gap: 1rem;
  }

  .buttons {
    display: flex;
    margin-bottom: 2rem;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  .loops-background {
    --yellow-border: color-mix(in hsl, var(--root-loops-ansi-yellow) 95%, black);
    --bright-yellow-border: color-mix(in hsl, var(--root-loops-ansi-bright-yellow) 90%, black);
    --red-border: color-mix(in hsl, var(--root-loops-ansi-red) 95%, black);
    --blue-border: color-mix(in hsl, var(--root-loops-ansi-blue) 94%, black);
    --magenta-border: color-mix(in hsl, var(--root-loops-ansi-magenta) 95%, black);
    --bright-cyan-border: color-mix(in hsl, var(--root-loops-ansi-bright-cyan) 95%, black);

    background: red;
    background: radial-gradient(
        circle at 14% 44%,
        transparent 0,
        transparent 40px,
        var(--red-border) 41px,
        var(--red-border) 44px,
        var(--root-loops-ansi-red) 45px,
        var(--root-loops-ansi-red) 120px,
        var(--red-border) 121px,
        var(--red-border) 124px,
        transparent 125px
      ),
      radial-gradient(
        circle at 91% 9%,
        transparent 0,
        transparent 30px,
        var(--blue-border) 31px,
        var(--blue-border) 34px,
        var(--root-loops-ansi-blue) 35px,
        var(--root-loops-ansi-blue) 90px,
        var(--blue-border) 91px,
        var(--blue-border) 94px,
        transparent 95px
      ),
      radial-gradient(
        circle at 84% 49%,
        transparent 0,
        transparent 40px,
        var(--bright-cyan-border) 41px,
        var(--bright-cyan-border) 44px,
        var(--root-loops-ansi-bright-cyan) 45px,
        var(--root-loops-ansi-bright-cyan) 130px,
        var(--bright-cyan-border) 131px,
        var(--bright-cyan-border) 134px,
        transparent 135px
      ),
      radial-gradient(
        circle at 44% 44%,
        transparent 0,
        transparent 20px,
        var(--bright-yellow-border) 21px,
        var(--bright-yellow-border) 24px,
        var(--root-loops-ansi-bright-yellow) 25px,
        var(--root-loops-ansi-bright-yellow) 70px,
        var(--bright-yellow-border) 71px,
        var(--bright-yellow-border) 74px,
        transparent 75px
      ),
      radial-gradient(
        circle at 94% 80%,
        transparent 0,
        transparent 30px,
        var(--magenta-border) 31px,
        var(--magenta-border) 34px,
        var(--root-loops-ansi-magenta) 35px,
        var(--root-loops-ansi-magenta) 90px,
        var(--magenta-border) 91px,
        var(--magenta-border) 94px,
        transparent 95px
      ),
      radial-gradient(
        circle at 10% 90%,
        transparent 0,
        transparent 30px,
        var(--yellow-border) 31px,
        var(--yellow-border) 34px,
        var(--root-loops-ansi-yellow) 35px,
        var(--root-loops-ansi-yellow) 90px,
        var(--yellow-border) 91px,
        var(--yellow-border) 94px,
        transparent 95px
      );
  }
</style>
