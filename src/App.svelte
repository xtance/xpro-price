<script lang="ts">
    import { categories } from "./stores/categories";
	import { currencies } from "./stores/currencies";
    import { faucets } from "./stores/faucets";

	


</script>

<main class="p-4">

	<div>
		Краны
	</div>

	<div class="flex">
		{#each Object.entries($faucets) as [name, value]}
			<div class="shadow">
				<div class="p-4">{name}</div>
				<input class="border-t p-4" bind:value={value} />
			</div>
		{/each}
	</div>

	<div>
		Предметы
	</div>
	<div class="">
		{#each $categories as category}
			<details class="shadow mb-4">
				<summary class="p-4 border-b">
					{category.n}
				</summary>
				{#each category.refs as ref}
					<div class="flex p-4">
						<div class="">
							{ref.name}
						</div>
					</div>
				{/each}
			</details>

		{/each}
	</div>


</main>
