<script lang="ts">
    import type { createStore } from "src/stores/baseStore";
	export let key: string;
	export let store: ReturnType<typeof createStore>;
</script>

<div class="p-2 w-1/6">
	<div class="shadow rounded-md overflow-hidden">
		<div class="p-4 bg-white/50">{key}</div>
		<input type="number" class="border-t p-4 w-full" bind:value={$store[key]} />
	</div>
</div>