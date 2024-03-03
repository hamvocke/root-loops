<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		margin: auto;
		width: min(calc(100% - 2rem), 1200px);
	}
</style>
