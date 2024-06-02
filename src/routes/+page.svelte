<script lang="ts">
  import type { PageData } from "./$types";
  import Header from "./Header.svelte";
  import Slider from "./Slider.svelte";
  import Select from "./Select.svelte";
  import Cereal from "./Cereal.svelte";
  import Terminal from "./Terminal.svelte";
  import {
    MilkAmount,
    milkSelectOptions,
    juiceSelectOptions,
    flavorSelectOptions,
    validationRules,
  } from "$lib/ingredients";
  import { prepare } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";
  import { HelpCircleIcon, CheckCircleIcon, ExternalLinkIcon } from "svelte-feather-icons";
  import { fade } from "svelte/transition";

  export let data: PageData;

  let milk = data.milk;
  let flavor = data.flavor;
  let artificialColors = data.colors;
  let sugar = data.sugar;
  let juice = data.juice;
  let sogginess = data.sogginess;

  let toast: string | undefined;

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
        <div>
          <Slider
            label="Sugar"
            id="sugar"
            min={validationRules.sugar.minValue}
            max={validationRules.sugar.maxValue}
            bind:value={sugar}
          />
          <Slider
            id="colors"
            label="Artificial Colors"
            min={validationRules.artificialColors.minValue}
            max={validationRules.artificialColors.maxValue}
            bind:value={artificialColors}
          />
          <Slider
            id="sogginess"
            label="Sogginess"
            min={validationRules.sogginess.minValue}
            max={validationRules.sogginess.maxValue}
            bind:value={sogginess}
          />
        </div>
        <div>
          <Select
            id="flavor"
            label="Cereal Flavor"
            options={flavorSelectOptions}
            bind:value={flavor}
          />
          <Select id="juice" label="Juice" options={juiceSelectOptions} bind:value={juice} />
          <Select id="milk" label="Milk" options={milkSelectOptions} bind:value={milk} />
        </div>
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
        <div class="milk" style={calculateMilkHeight(milk)}></div>
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
    border: 1px solid var(--color-emerald-500);
    box-shadow: 0 0.25rem 0.5rem #0003;
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
