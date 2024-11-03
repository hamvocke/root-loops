<script lang="ts">
  interface Props {
    label?: string;
    id: string;
    value: number;
    min?: number;
    max?: number;
  }

  let { label = "My Slider", id, value = $bindable(), min = 1, max = 10 }: Props = $props();
</script>

<div class="slider">
  <div class="inputs">
    <label for={id}>{label}</label>
    <output>{value}</output>
  </div>
  <input type="range" {id} name={id} {min} {max} bind:value />
</div>

<style>
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  output {
    background: var(--color-slate-100);
    border: 1px solid var(--color-slate-050);
    color: var(--color-slate-800);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    box-shadow:
      0 1px 1px #0002,
      0 0.1rem 0.25rem #0001;
  }

  label {
    font-weight: bold;
  }

  input[type="range"] {
    width: 100%;

    &:focus {
      outline: 2px solid var(--root-loops-ansi-red);
      outline-offset: 2px;
    }
  }
</style>
