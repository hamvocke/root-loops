<script lang="ts">
  export let label: string;
  export let id: string;
  export let value: number;
  export let min = 1;
  export let max = 10;
  export let datalist: Array<number | string> | null | undefined = null;

  function decrease() {
    value = Math.max(min, value - 1);
  }

  function increase() {
    value = Math.min(max, value + 1);
  }
</script>

<div class="slider">
  <button on:click={decrease} type="button">-</button>
  <div class="range">
    <div class="labels">
      <label for={id}>{label}</label>
      <output>{value}</output>
    </div>
    <input type="range" {id} name={id} {min} {max} bind:value list="markers" />
  </div>

  <button on:click={increase} type="button">+</button>
</div>

{#if datalist}
  <datalist id="markers">
    {#each datalist as datapoint}
      <option value={datapoint}></option>
    {/each}
  </datalist>
{/if}

<style>
  .slider {
    display: inline-flex;
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    border: 1px solid var(--color-slate-050);
    box-shadow: 0 0.25rem 0.5rem #0001;
    border-radius: var(--border-radius);
    overflow: auto;
  }

  .range {
    border-right: 1px solid var(--color-slate-300);
    border-left: 1px solid var(--color-slate-300);
    padding: 0.5rem;
  }

  .labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  output {
    font-weight: bold;
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

  input[type="range"] {
    max-width: 150px;
  }
</style>
