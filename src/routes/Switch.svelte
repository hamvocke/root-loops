<script lang="ts">
  interface Props {
    label: string;
    id: string;
    checked: boolean;
  }

  let { label, id, checked = $bindable() }: Props = $props();

  function handleClick() {
    checked = !checked;
  }
</script>

<div class="slider">
  <label for={id}>{label}</label>
  <button
    type="button"
    role="switch"
    {id}
    aria-checked={checked}
    aria-labelledby={id}
    onclick={handleClick}
  >
  </button>
</div>

<style>
  .slider {
    display: flex;
    align-items: center;
  }

  .slider button {
    width: 3.5rem;
    height: 2rem;
    position: relative;
    margin: 0 0 0 0.5rem;
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
  }

  .slider button::before {
    content: "";
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: 0.1rem;
    right: 1.6rem;
    transition: transform 0.3s;
    background: linear-gradient(
      to bottom,
      var(--color-slate-200),
      var(--color-slate-300) 50%,
      var(--color-slate-400)
    );
    border: 1px solid var(--color-slate-400);
    box-shadow:
      0 1px 1px #0003,
      0 0.1rem 0.25rem #0001,
      0 0.2rem 0.5rem #0001;
  }

  .slider button[aria-checked="true"]::before {
    transform: translateX(1.5rem);
    transition: transform 0.3s;
    background: linear-gradient(
      to bottom,
      var(--color-red-200),
      var(--color-red-600) 50%,
      var(--color-red-700)
    );
    border: 1px solid var(--color-red-700);
  }

  .slider button {
    border-radius: 1rem;
  }

  .slider button::before {
    border-radius: 100%;
  }

  .slider button:focus {
    border-radius: 1rem;
  }
</style>
