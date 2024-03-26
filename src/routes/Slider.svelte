<script lang="ts">
  export let label = "My Slider";
  export let id: string;
  export let value: number;
</script>

<div class="slider">
  <input type="range" {id} name={id} min="1" max="11" bind:value />
  <label for={id}>{label}</label><span class="value">{value}</span>
</div>

<style>
  .slider {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .value {
    margin: 0 0.25rem;
    padding: 0.25rem;
    background-color: var(--color-gray-100);
    border-radius: 0.2rem;
  }
</style>
