<script lang="ts">
	import type { Writable } from 'svelte/store';
	export let label = 'My Slider';
	export let id: string;
	export let value: Writable<number>;
</script>

<div class="slider">
	<input type="range" {id} name={id} min="1" max="11" bind:value />
	<label for={id}>{label}: {value}</label>
</div>
