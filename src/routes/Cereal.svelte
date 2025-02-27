<script lang="ts">
  import { type Cereal } from "$lib/cereals";
  import { fade } from "svelte/transition";
  interface Props {
    cereal: Cereal;
  }

  let { cereal }: Props = $props();

  let notification: string | undefined = $state();
  function copyToClipboard(cereal: Cereal) {
    const showNotification = () => {
      notification = "Copied";
      setTimeout(() => (notification = undefined), 2000);
    };

    navigator.clipboard.writeText(cereal.color_hex).then(showNotification);
  }
</script>

<div class="wrapper" style="--color: {cereal.color_hsl}">
  {#if notification}
    <div class="notification" role="alert" transition:fade={{ duration: 200 }}>{notification}</div>
  {/if}
  <button
    class="cereal"
    aria-label={cereal.name}
    title={cereal.name}
    onclick={() => copyToClipboard(cereal)}
  >
    <div class="hole"></div>
  </button>
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;

    &:hover .cereal,
    .cereal:focus-visible {
      transform: scale(1.2);
      outline-width: 8px;
    }

    @media screen and (min-width: 640px) {
      flex-direction: column;
    }
  }

  .cereal {
    box-sizing: border-box;
    height: clamp(4rem, 9vw, 100px);
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: var(--color);
    border: 3px solid color-mix(in hsl, var(--color) 90%, black);
    outline: 4px solid color-mix(in hsl, var(--color) 30%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease-out;
    cursor: pointer;
  }

  .hole {
    height: clamp(1rem, 3vw, 32px);
    width: clamp(1rem, 3vw, 32px);
    border-radius: 50%;
    background: var(--color-slate-300);
    border: 3px solid color-mix(in hsl, var(--color) 90%, black);
  }

  .notification {
    position: absolute;
    bottom: -0.5rem;
    z-index: 1;
    background: color-mix(in hsl, var(--color) 40%, white);
    border: 2px solid color-mix(in hsl, var(--color) 80%, transparent);
    color: color-mix(in hsl, var(--color) 30%, black);
    padding: 0.4rem 0.6rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 4px #0003;
    transform: rotate(-4deg);
  }
</style>
