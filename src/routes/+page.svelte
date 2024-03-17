<script lang="ts">
	import Slider from './Slider.svelte';
	import { milk, flavor, colors } from './stores';

	type Cereal = {
		name: string;
		color: string;
	};

	let cereals: Cereal[] = [
		{ name: 'base01', color: '#000' },
		{ name: 'base02', color: '#111' },
		{ name: 'base03', color: '#222' },
		{ name: 'base04', color: '#333' },
		{ name: 'base05', color: '#444' },
		{ name: 'base06', color: '#555' },
		{ name: 'base07', color: '#666' },
		{ name: 'base08', color: '#777' },

		{ name: 'base09', color: '#888' },
		{ name: 'base10', color: '#999' },
		{ name: 'base11', color: '#aaa' },
		{ name: 'base12', color: '#bbb' },
		{ name: 'base13', color: '#ccc' },
		{ name: 'base14', color: '#ddd' },
		{ name: 'base15', color: '#eee' },
		{ name: 'base16', color: '#fff' }
	];
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
		<div class="cereal" style="--color: {cereal.color};"></div>
	{/each}
</section>

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
		border: 2rem solid var(--color);
		outline: 0.5rem solid #0001;
	}
</style>
