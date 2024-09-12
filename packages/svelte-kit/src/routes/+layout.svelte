<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<!-- Mieruca Optimize Tag -->
	<script type="text/javascript" id="mierucaOptimizejs">
	window.__optimizeid = window.__optimizeid || [];__optimizeid.push([1842686338]);
	(function () {var fjs = document.createElement('script');fjs.type = 'text/javascript';
	fjs.async = true;fjs.id = "fjssync";var timestamp = new Date;fjs.src = 'https://opt.mieru-ca.com/service/js/mieruca-optimize.js?v=' + timestamp.getTime();
	var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(fjs, x);})();
	</script>
	<!-- End Mieruca Optimize Tag -->
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
