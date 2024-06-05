<script lang="ts">
  import type { SelectOption } from "$lib/ingredients";

  export let options: SelectOption[];
  export let value: number;
  export let id: string;
  export let label: string;
</script>

<div class="select">
  <label for={id}>{label}</label>
  <select bind:value {id} name={id}>
    {#each options as option}
      <option value={option.value}>
        {option.label}
      </option>
    {/each}
  </select>
</div>

<style>
  .select {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  label {
    font-weight: bold;
  }

  select {
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    background: color-mix(in hsl, var(--color-slate-050) 30%, transparent);
    border: 1px solid var(--color-slate-050);
    box-shadow: 0 0.25rem 0.5rem #0001;
    border-radius: 0.2rem;
    width: 100%;
  }

  select:focus {
    outline: 2px solid var(--root-loops-ansi-red);
  }
</style>
