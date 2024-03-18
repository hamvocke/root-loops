<script lang="ts">
	import Slider from './Slider.svelte';
	import { generateColors, generateBowlColors } from '$lib/colorcrunch';

	let milk = 6;
	let flavor = 1;
	let colors = 6;

	// TODO: inGamut() checks
	// TODO: watch out, the colors land in css land in 'oklch' format, too, which might have compatibility issues
	$: cerealColors = generateColors(6, colors / 10);
	$: intenseCerealColors = generateColors(6, (colors - 2) / 10);
	$: bowlColors = generateBowlColors(4, milk / 100);
	$: allColors = [
		bowlColors[0],
		...cerealColors,
		bowlColors[2],
		bowlColors[1],
		...intenseCerealColors,
		bowlColors[3]
	];
</script>

<svelte:head>
	<title>Root Loops</title>
	<meta name="description" content="A code & terminal color scheme for cereal lovers." />
</svelte:head>

<header>
	<h1>Root Loops</h1>
	<p class="caption">A code & terminal color scheme generator for cereal lovers.</p>
</header>

<section class="bowl">
	{#each allColors as cereal}
		<!-- todo: consider adding cereal-texture? -->
		<div class="cereal" style="--color: {cereal};"></div>
	{/each}
</section>

<section class="sliders">
	<Slider id="slider-milk" label="Milk" bind:value={milk} />

	<Slider id="slider-flavor" label="Flavor" bind:value={flavor} />

	<Slider id="slider-colors" label="Artificial Colors" bind:value={colors} />
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
		box-sizing: border-box;
		height: clamp(3rem, 9vw, 128px);
		width: clamp(3rem, 9vw, 128px);
		border-radius: 50%;
		border: 3rem solid var(--color);
	}
</style>
