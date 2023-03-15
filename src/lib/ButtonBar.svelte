<script lang="ts">
    import type { createStore } from "src/stores/baseStore";
    import Button from "./Button.svelte";
	export let store: ReturnType<typeof createStore>;
</script>

<div class="flex p-2 gap-4">
	<Button on:click={store.toLocalStorage} cls="bg-green-200">
		Сохранить
	</Button>

	<Button on:click={store.fromLocalStorage} cls="bg-blue-100">
		Загрузить
	</Button>

	<Button on:click={store.copy}>
		Скопировать
	</Button>

	<Button on:click={store.download}>
		Скачать
	</Button>
</div>