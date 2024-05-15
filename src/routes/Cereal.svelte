<script lang="ts">
  import Color from "colorjs.io";
  export let color: Color;
</script>

<div class="wrapper">
  <div class="cereal" style="--color: {color}"></div>
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
    border: 0.25rem solid #fffa;
  }

  .color-value {
    font-family: monospace;
    font-size: 0.9em;
  }
</style>
