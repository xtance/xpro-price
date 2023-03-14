<script lang="ts">
	export let editable: [name: string, value: number];
</script>

<div class="p-2 w-1/6">
	<div class="shadow rounded-md overflow-hidden">
		<div class="p-4 bg-white/50">{editable[0]}</div>
		<input type="number" class="border-t p-4 w-full" bind:value={editable[1]} />
	</div>
</div>