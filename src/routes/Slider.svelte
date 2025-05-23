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

    --track-height: 1.4rem;
    --thumb-height: 1rem;
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
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  /* Webkit */
  input[type="range"]::-webkit-slider-runnable-track {
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
    height: var(--track-height);
    border-radius: 0.5rem;
  }

  input[type="range"]:hover::-webkit-slider-runnable-track {
    background: linear-gradient(
      to bottom,
      color-mix(in hsl, var(--color-slate-050) 40%, transparent),
      color-mix(in hsl, var(--color-slate-050) 80%, transparent)
    );
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: var(--thumb-height);
    width: var(--thumb-height);
    background: linear-gradient(
      to bottom,
      var(--color-red-200),
      var(--color-red-600) 50%,
      var(--color-red-700)
    );
    border: 1px solid var(--color-red-700);
    box-shadow:
      0 1px 1px #0003,
      0 0.1rem 0.25rem #0001,
      0 0.2rem 0.5rem #0001;
    border-radius: 50%;
    margin-top: 0.15rem;
  }

  input[type="range"]:hover::-webkit-slider-thumb {
    background: linear-gradient(
      to bottom,
      var(--color-red-100),
      var(--color-red-500) 50%,
      var(--color-red-700)
    );
  }

  /* Firefox */
  input[type="range"]::-moz-range-track {
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
    height: var(--track-height);
    border-radius: 0.5rem;
  }

  input[type="range"]::-moz-range-thumb {
    height: var(--thumb-height);
    width: var(--thumb-height);
    background: linear-gradient(
      to bottom,
      var(--color-red-200),
      var(--color-red-600) 50%,
      var(--color-red-700)
    );
    border: 1px solid var(--color-red-700);
    box-shadow:
      0 1px 1px #0003,
      0 0.1rem 0.25rem #0001,
      0 0.2rem 0.5rem #0001;
    border-radius: 50%;
  }

  input[type="range"]:hover::-moz-range-track {
    background: linear-gradient(
      to bottom,
      color-mix(in hsl, var(--color-slate-050) 40%, transparent),
      color-mix(in hsl, var(--color-slate-050) 80%, transparent)
    );
  }

  input[type="range"]:hover::-moz-range-thumb {
    background: linear-gradient(
      to bottom,
      var(--color-red-100),
      var(--color-red-500) 50%,
      var(--color-red-700)
    );
  }
</style>
