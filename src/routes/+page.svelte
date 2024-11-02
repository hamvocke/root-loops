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

  let recipe = structuredClone(defaultRecipe);

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

  function resetRecipe() {
    recipe = fromQueryString($page.url.searchParams);
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
  <title>Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
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
    <form on:submit={saveUrl} data-sveltekit-replacestate class="glass-box input-box gradient-bg">
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
        <button type="button" on:click={resetRecipe} class="button">Reset</button>
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

    <div class="content">
      <Terminal />
      <Export {recipe} />
    </div>
  </main>
  <Footer />
</div>

<style>
  main {
    --gap: clamp(0.2rem, 2vw, 1rem);
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
  .content {
    grid-column: content;
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
    background: var(--color-emerald-300);
    padding: 0.5rem 0.75rem;
    color: var(--color-emerald-950);
    border-radius: 0.5rem;
    border: 2px solid var(--color-emerald-400);
    box-shadow: 0 0.25rem 0.5rem #0003;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-box {
    padding: 1rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      padding: 1.5rem;
    }
  }

  .input {
    margin-bottom: 2rem;
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

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  .bowl {
    position: relative;
    margin-bottom: 2rem;
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
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    gap: 1rem;
  }
</style>
