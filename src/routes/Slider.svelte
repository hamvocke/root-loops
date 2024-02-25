<script lang="ts">
	export let label = 'My Slider';
	export let id: string;
	let count = 0;
</script>

<div class="slider">
	<input type="range" {id} name={id} min="1" max="11" bind:value={count} />
	<label for={id}>{label}: {count}</label>
</div>
