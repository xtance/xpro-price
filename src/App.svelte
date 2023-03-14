<script lang="ts">
    import type { Writable } from "svelte/store";
    import { toJSON } from "./help/toJSON";
	import Button from "./lib/Button.svelte";
	import Details from "./lib/Details.svelte";
    import Editable from "./lib/Editable.svelte";
    import JSONView from "./lib/JSONView.svelte";
	import { categories } from "./stores/categories";
	import { drains } from "./stores/drains";
    import { faucets } from "./stores/faucets";

	let text = '';
	let fileName = '';

	const open = <T>(store: Writable<T>, _fileName: string) => { text = toJSON(store), fileName = _fileName };
	const close = () => text = '';
</script>

<main class="p-4">

	{#if text}
		<JSONView {fileName} {text} {close} />
	{/if}

	<Details title="Краны" cls="bg-red-200">
		<div class="p-4">
			<Button on:click={() => open(faucets, 'faucets.json')}>
				Экспорт
			</Button>
		</div>
		<div class="flex flex-wrap">
			{#each Object.entries($faucets) as editable}
				<Editable {editable} />
			{/each}
		</div>
	</Details>

	
	<Details title="Сливы" cls="bg-blue-200">
		<div class="p-4">
			<Button on:click={() => open(drains, 'drains.json')}>
				Экспорт
			</Button>
		</div>
		<div class="flex flex-wrap">
			{#each Object.entries($drains) as editable}
				<Editable {editable} />
			{/each}
		</div>
	</Details>

	<Details title="Предметы" cls="bg-green-200">
		<div class="p-4">
			<Button on:click={() => open(categories, 'categories.json')}>
				Экспорт
			</Button>
		</div>
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
