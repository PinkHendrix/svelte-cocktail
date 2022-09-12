<script lang="typescript">
	export let drinkProp;

	let drinkState = drinkProp;

	const handleOnClick = async () => console.log('Click!');
</script>

<div class="wrapper">
	<button on:click={handleOnClick}>Get New Drink</button>
	<h2>Drink Name</h2>
	<img class="drink-thumb" src="/" alt="drink-thumb" />
	<p>Instructions</p>

	<p>Ingredients</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
	}

	.drink-thumb {
		width: 300px;
		border-radius: 1rem;
	}

	p {
		min-width: 500px;
		text-align: center;
	}

	.ingredients {
		margin: 2px 0;
	}
</style>
