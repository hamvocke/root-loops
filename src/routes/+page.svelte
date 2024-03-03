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
	<p class="caption">A color scheme generator for cereal lovers.</p>
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
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 7rem;
		text-transform: uppercase;
		letter-spacing: -3px;
		font-weight: 900;
		margin-bottom: 0.5rem;
	}

	.caption {
		margin-top: 0;
		font-size: 1.4rem;
		font-weight: 300;
		font-style: italic;
	}
</style>
