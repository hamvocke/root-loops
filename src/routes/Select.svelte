<script lang="ts">
  import type { SelectOption } from "$lib/selectOptions";

  interface Props {
    options: SelectOption[];
    value: number | string;
    id: string;
    label?: string;
    disabled?: boolean;
  }

  let { options, value = $bindable(), id, label, disabled = false }: Props = $props();

  let groupedOptions: Record<string, SelectOption[] | undefined> = $state({});
  if (options.every((o) => o.group)) {
    groupedOptions = Object.groupBy(options, ({ group }) => group || "");
  }
  let groups: string[] = $derived(Object.keys(groupedOptions));
</script>

<div class="select">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <select bind:value {id} name={id} {disabled}>
    {#if groups.length > 0}
      {#each groups as group (group)}
        <optgroup label={group}>
          {#each groupedOptions[group] || [] as option (option.value)}
            <option value={option.value}>
              {option.label}
            </option>
          {/each}
        </optgroup>
      {/each}
    {:else}
      {#each options as option (option.value)}
        <option value={option.value}>
          {option.label}
        </option>
      {/each}
    {/if}
  </select>
</div>

<style>
  .select {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  label {
    font-weight: bold;
  }

  select {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.5rem 1.8rem 0.5rem 0.6rem;
    font-size: 1rem;
    cursor: pointer;
    color: var(--color-slate-900);
    background:
      linear-gradient(
        to bottom,
        color-mix(in hsl, var(--color-slate-050) 10%, transparent),
        color-mix(in hsl, var(--color-slate-050) 80%, transparent)
      ),
      url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
        no-repeat 100%;
    border: 1px solid var(--color-slate-050);
    box-shadow:
      0 1px 1px #0003,
      0 0.1rem 0.25rem #0001,
      0 0.2rem 0.5rem #0001;
    border-radius: 0.2rem;

    &:disabled {
      opacity: 0.6;
    }

    &:hover,
    &:focus-visible {
      background:
        linear-gradient(
          to bottom,
          color-mix(in hsl, var(--color-slate-050) 50%, transparent),
          color-mix(in hsl, var(--color-slate-050) 70%, transparent)
        ),
        url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
          no-repeat 100%;
    }
  }
</style>
