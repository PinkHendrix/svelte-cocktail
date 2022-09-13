<script context="module" lang="ts">
	import type { DrinkType } from '../types';

	export async function load({ fetch }) {
		const drink: DrinkType = await (await fetch('index.json')).json();

		return {
			props: { drinkProp: drink }
		};
	}
</script>

<script lang="ts">
	export let drinkProp: DrinkType;

	let drinkState: DrinkType = drinkProp;

	const handleOnClick = async () => {
		const result = await (await fetch('index.json')).json();
		drinkState = result;
	};
</script>

<div class="wrapper">
	<button on:click={handleOnClick}>Get New Drink</button>
	<h2>{drinkState.name}</h2>
	<img class="drink-thumb" src={drinkState.thumbUrl} alt="drink-thumb" />
	<p>{drinkState.instructions}</p>

	{#each drinkState.ingredients as ingredient}
		<p class="ingredient">{ingredient.amount}{ingredient.name}</p>
	{/each}
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

	.ingredient {
		margin: 2px 0;
	}
</style>
