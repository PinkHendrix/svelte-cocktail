import type { IngredientType, DrinkType } from 'src/types';

export async function get(): Promise<{ body: any }> {
	const result = await (await fetch('www.thecocktaildb.com/api/json/v1/1/random.php')).json();

	const ingredients: IngredientType[] = [...Array(15)]
		.map((_value, i) => ({
			name: result.drinks[0][`strIngredient${i + 1}`],
			amount: result.drinks[0][`strMeasure${i + 1}`]
		}))
		.filter((ingredient) => ingredient.name);

	console.log(ingredients);

	return {
		body: result
	};
}
