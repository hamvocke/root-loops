<script lang="ts">
  const values = ["Classic", "Fruity", "Unicorn"];

  let current = values[0];
</script>

<div class="button-group">
  {#each values as value}
    <button
      type="button"
      aria-selected={current === value ? "true" : "false"}
      on:click={() => (current = value)}>{value}</button
    >
  {/each}
</div>

<style>
  .button-group {
    display: flex;
    background: color-mix(in oklch, var(--color-slate-100) 40%, transparent);
    border: 1px solid var(--color-slate-050);
    box-shadow: 0 0.25rem 0.5rem #0001;
    border-radius: var(--border-radius);
    overflow: auto;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background: color-mix(in oklch, var(--color-slate-300) 40%, transparent);
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background: color-mix(in oklch, var(--color-slate-200) 40%, transparent);
    }

    &[aria-selected="true"] {
      background: color-mix(in oklch, var(--color-slate-400) 40%, transparent);
    }
  }

  button + button {
    border-left: 1px solid var(--color-slate-050);
  }
</style>
