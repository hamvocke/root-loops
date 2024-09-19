<script lang="ts">
  import type { SelectOption } from "$lib/ingredients";

  export let options: SelectOption[];
  export let value: number;
  export let id: string;
  export let label: string | undefined;
</script>

<div class="select">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
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
    display: inline-flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  label {
    font-weight: bold;
  }

  select {
    padding: 0.5rem 0.6rem;
    font-size: 1rem;
    color: var(--color-slate-900);
    background: linear-gradient(
      to bottom,
      color-mix(in hsl, var(--color-slate-050) 10%, transparent),
      color-mix(in hsl, var(--color-slate-050) 80%, transparent)
    );
    border: 1px solid var(--color-slate-050);
    box-shadow:
      0 1px 1px #0003,
      0 0.1rem 0.25rem #0001,
      0 0.2rem 0.5rem #0001;
    border-radius: 0.2rem;

    &:hover,
    &:focus-visible {
      background: linear-gradient(
        to bottom,
        color-mix(in hsl, var(--color-slate-050) 50%, transparent),
        color-mix(in hsl, var(--color-slate-050) 70%, transparent)
      );
    }
  }

  select:focus {
    outline: 2px solid var(--root-loops-ansi-red);
  }
</style>
