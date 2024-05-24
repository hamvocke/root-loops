<script lang="ts">
  let value = 0;
  const min = 0;
  const max = 4;
  function decrease() {
    value = Math.max(min, value - 1);
  }

  function increase() {
    value = Math.min(max, value + 1);
  }
</script>

<div class="slider">
  <button on:click={decrease} type="button">-</button>
  <div class="value-label">
    <span class="value">{value}</span>
    <span class="label">Milk amount</span>
  </div>
  <button on:click={increase} type="button">+</button>
</div>

<style>
  .slider {
    display: inline-flex;
    margin: 0.5rem 0;
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    border: 1px solid var(--color-slate-050);
    box-shadow: 0 0.25rem 0.5rem #0001;
    border-radius: var(--border-radius);
    overflow: auto;
  }

  .value-label {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--color-slate-300);
    border-left: 1px solid var(--color-slate-300);
  }

  .value {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .label {
    font-style: italic;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    background: color-mix(in oklch, var(--color-slate-300) 40%, transparent);
    cursor: pointer;
    font-size: 1.5rem;

    &:hover,
    &:focus-visible {
      background: color-mix(in oklch, var(--color-slate-200) 40%, transparent);
    }
  }
</style>
