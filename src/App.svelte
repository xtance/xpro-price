<script lang="ts">
    import type { Writable } from "svelte/store";
	import Button from "./lib/Button.svelte";
    import ButtonBar from "./lib/ButtonBar.svelte";
	import Details from "./lib/Details.svelte";
    import Editable from "./lib/Editable.svelte";
	import { categories } from "./stores/categories";
	import { drains } from "./stores/drains";
    import { faucets } from "./stores/faucets";
</script>

<main class="p-4">

	<Details title="Краны" cls="bg-red-200">
		<ButtonBar store={faucets} />
		<div class="flex flex-wrap">
			{#each Object.keys($faucets) as key}
				<Editable {key} store={faucets} />
			{/each}
		</div>
	</Details>

	
	<Details title="Сливы" cls="bg-blue-200">
		<ButtonBar store={drains} />
		<div class="flex flex-wrap">
			{#each Object.keys($drains) as key}
				<Editable {key} store={drains} />
			{/each}
		</div>
	</Details>

	<Details title="Предметы" cls="bg-green-200">
		<ButtonBar store={categories} />
		<div class="">
			{#each $categories as category}
				<details class="shadow mb-4">
					<summary class="p-4 border-b">
						{category.n}
					</summary>
					{#each category.refs as ref}
						<div class="flex gap-4 [&>*]:w-1/5 shadow items-center">
							<div class="p-4">
								{ref.name}
							</div>
							<div>
								Цена
							</div>
							<input
								type="number"
								class="p-4"
								bind:value={ref.price}
							/>
							<div>
								Вес
							</div>
							<input
								type="number"
								class="p-4"
								bind:value={ref['gr']}
							/>
						</div>
					{/each}
				</details>

			{/each}
		</div>
	</Details>


</main>
