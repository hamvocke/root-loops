<script lang="ts">
	import Slider from './Slider.svelte';
	import { generateColors } from '$lib/colorcrunch';

	let milk = 1;
	let flavor = 1;
	let colors = 1;

	// TODO: watch out, the colors land in css land in 'oklch' format, too, which might have compatibility issues
	let cereals = generateColors(16);
</script>

<svelte:head>
	<title>Root Loops</title>
	<meta name="description" content="A color scheme for the cereal developer" />
</svelte:head>

<header>
	<h1>Root Loops</h1>
	<p class="caption">A color scheme generator for cereal lovers.</p>
</header>

<section class="bowl">
	{#each cereals as cereal}
		<!-- todo: consider adding cereal-texture? -->
		<div class="cereal" style="--color: {cereal};"></div>
	{/each}
</section>

<section class="sliders">
	<Slider id="slider-milk" label="Milk" bind:value={milk} />

	<Slider id="slider-flavor" label="Flavor" bind:value={flavor} />

	<Slider id="slider-colors" label="Artificial Colos" bind:value={colors} />
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

	.bowl {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: auto;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.cereal {
		--outline-color: hsl(from var(--color) h s l / 0.1);
		box-sizing: border-box;
		height: clamp(3rem, 9vw, 128px);
		width: clamp(3rem, 9vw, 128px);
		border-radius: 50%;
		border: 2rem solid var(--color);
		outline: 0.5rem solid hsl(from var(--color) h s l / 0.2);
	}
</style>
