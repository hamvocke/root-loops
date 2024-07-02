<script lang="ts">
  import { ChevronDownIcon } from "svelte-feather-icons";

  export let id: string;
  export let params: string;
</script>

<div class="dropdown">
  <button type="button" class="button" popovertarget={id}>
    Export
    <ChevronDownIcon size="20" />
  </button>
  <ul {id} class="dropdown-menu glass-box" popover="auto">
    <li><a href="/export?format=json&{params}">JSON</a></li>
    <li><a href="/export?format=alacritty&{params}">Alacritty</a></li>
    <li><a href="/export?format=windows-terminal&{params}">Windows Terminal</a></li>
  </ul>
</div>

<style>
  .dropdown {
    position: relative;
  }

  .dropdown-menu:popover-open {
    position: absolute;
    inset: unset;
    margin-top: 0.25rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0.2rem;
    }

    a {
      display: block;
      padding: 0.5rem 1rem;
      color: inherit;
    }

    a:hover,
    a:focus-visible {
      text-decoration: none;
      background: color-mix(in hsl, var(--color-slate-050) 40%, transparent);
      color: var(--color-slate-950);
      border-radius: 0.25rem;
    }
  }
</style>
