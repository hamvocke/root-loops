<script lang="ts">
  export let label = "My Slider";
  export let id: string;
  export let value: number;
  export let min: number = 1;
  export let max: number = 10;
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
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  label {
    font-weight: bold;
  }

  input[type="range"] {
    max-width: 160px;

    @media screen and (min-width: 640px) {
      min-width: 180px;
    }

    &:focus {
      outline: 2px solid var(--root-loops-ansi-red);
      outline-offset: 2px;
    }
  }
</style>
