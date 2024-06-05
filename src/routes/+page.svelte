<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Header from "./Header.svelte";
  import Slider from "./Slider.svelte";
  import Select from "./Select.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import {
    defaultRecipe,
    MilkAmount,
    milkSelectOptions,
    juiceSelectOptions,
    flavorSelectOptions,
    validationRules,
    parseRecipeFromQueryString,
  } from "$lib/ingredients";
  import { prepare } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";
  import { HelpCircleIcon, CheckCircleIcon, ExternalLinkIcon } from "svelte-feather-icons";
  import { fade } from "svelte/transition";

  let { milkAmount, flavor, artificialColors, sugar, juice, sogginess } = defaultRecipe;

  onMount(() => {
    ({ milkAmount, flavor, artificialColors, sugar, juice, sogginess } = parseRecipeFromQueryString(
      // eslint-disable-next-line svelte/valid-compile
      $page.url.searchParams,
    ));
  });

  let toast: string | undefined;

  $: cereals = prepare({
    milkAmount: milkAmount,
    flavor: flavor,
    artificialColors: artificialColors,
    sugar: sugar,
    juice: juice,
    sogginess: sogginess,
  });
  $: cssColors = generateCssColors(cereals);

  function calculateMilkHeight(amount: MilkAmount) {
    return `height: ${amount * 33.34}%;`;
  }

  function saveUrl(event: SubmitEvent) {
    const showNotification = () => {
      toast = "Recipe saved. You can now bookmark and share this URL.";
      setTimeout(() => (toast = undefined), 4000);
    };

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const queryParams = new URLSearchParams(
      formData as unknown as Record<string, string>,
    ).toString();
    const url = `${document.location.origin}?${queryParams}`;

    navigator.clipboard.writeText(url);

    showNotification();
  }
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
  <link rel="icon" href={faviconDataUrl(cereals)} />
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
          bind:value={sugar}
        />
        <Slider
          label="Artificial Colors"
          id={validationRules.artificialColors.name}
          min={validationRules.artificialColors.minValue}
          max={validationRules.artificialColors.maxValue}
          bind:value={artificialColors}
        />
        <Slider
          label="Sogginess"
          id={validationRules.sogginess.name}
          min={validationRules.sogginess.minValue}
          max={validationRules.sogginess.maxValue}
          bind:value={sogginess}
        />

        <Select
          label="Cereal Flavor"
          id={validationRules.flavor.name}
          options={flavorSelectOptions}
          bind:value={flavor}
        />
        <Select
          label="Juice"
          id={validationRules.juice.name}
          options={juiceSelectOptions}
          bind:value={juice}
        />
        <Select
          label="Milk"
          id={validationRules.milk.name}
          options={milkSelectOptions}
          bind:value={milkAmount}
        />
      </div>

      <div class="buttons">
        <a class="button plain" href="/help"><HelpCircleIcon size="20" /> Help</a>
        <button type="submit" class="primary">
          <ExternalLinkIcon size="20" /> Save
        </button>
      </div>
    </form>

    <section class="bowl" aria-label="Cereal Bowl">
      <div class="glow"></div>
      <div class="bowl-content glass-box">
        <div class="milk" style={calculateMilkHeight(milkAmount)}></div>
        <div class="cereals">
          {#each Object.entries(cereals) as [_key, cereal]}
            <Cereal {cereal} />
          {/each}
        </div>
      </div>
    </section>

    <Terminal />

    <div class="credit"><a href="https://hamvocke.com">Made by Ham &lt;3</a></div>
  </main>
</div>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 2rem), 1200px);
    accent-color: var(--root-loops-ansi-red);
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
    max-width: 900px;
    margin: 3rem auto 1rem auto;
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
    margin: 1rem 0;
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

  .credit {
    text-align: right;
    margin: 3rem 0 1rem 0;
    font-size: 0.9rem;
    font-family: "Fira Code", monospace;

    a {
      color: var(--color-slate-800);
    }
  }

  .buttons {
    display: flex;
    margin-bottom: 2rem;
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
