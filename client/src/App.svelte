<script>
	import { fly } from 'svelte/transition';
</script>

<main>
	<h1 transition:fly="{{ y: 200, duration: 2000 }}">2022년 3월 9일 대선...</h1>
	<h1 transition:fly="{{ y: 200, duration: 2000 }}">투표하지 않겠는가!</h1>
</main>

<style>
	h1 {
		background: linear-gradient(to right, #dc6361, #5c90de);
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;

	}
	main {
		text-align: center;
		padding: 10em;
		margin: 0 auto;
	}
</style>