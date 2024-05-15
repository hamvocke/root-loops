<script lang="ts">
  import Color from "colorjs.io";
  export let color: Color;
</script>

<div class="wrapper">
  <div class="cereal" style="--color: {color}">
    <div class="hole"></div>
  </div>
  <span class="color-value">{color}</span>
  {#if !color.inGamut("srgb")}<span title="Not in srgb gamut">⚠️</span>{/if}
</div>

<style>
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
    background: var(--color);
    border: 3px solid color-mix(in oklch, var(--color) 90%, black);
    outline: 0.4rem solid color-mix(in oklch, var(--color) 10%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease-out;

    &:hover {
      transform: scale(1.2);
      outline-width: 0.8rem;
    }
  }

  .hole {
    height: clamp(1rem, 3vw, 32px);
    width: clamp(1rem, 3vw, 32px);
    border-radius: 50%;
    background: white;
    opacity: 75%;
  }

  .color-value {
    font-family: monospace;
    font-size: 0.9em;
  }
</style>
