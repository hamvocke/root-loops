<script lang="ts">
  export let values: string[];
  export let value: string;
  export let id: string;
  export let label: string;
</script>

<div class="select">
  <label for={id}>{label}</label>
  <select bind:value {id}>
    {#each values as value}
      <option {value}>
        {value}
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
    background: color-mix(in oklch, var(--color-slate-100) 50%, transparent);
    border: 1px solid var(--color-slate-050);
    box-shadow: 0 0.25rem 0.5rem #0001;
    border-radius: 0.2rem;
    min-width: 180px;
  }

  select:focus {
    outline: 2px solid var(--root-loops-ansi-red);
  }
</style>
