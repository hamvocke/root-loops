<script>
	import Slider from './Slider.svelte';
	import { milk, flavor, colors } from './stores';
</script>

<svelte:head>
	<title>Root Loops</title>
	<meta name="description" content="A color scheme for the cereal developer" />
</svelte:head>

<header>
	<h1>Root Loops</h1>
	<small>A color scheme generator for cereal lovers.</small>
</header>

<section class="sliders">
	<Slider id="slider-milk" label="Milk" bind:value={$milk} />

	<Slider id="slider-flavor" label="Flavor" bind:value={$flavor} />

	<Slider id="slider-colors" label="Artificial Colos" bind:value={$colors} />
</section>

<style>
	header {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: 4rem;
		font-weight: 900;
	}
</style>
