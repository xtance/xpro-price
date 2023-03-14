<script lang="ts">
	export let cls: string = 'bg-white';
</script>

<button class="p-4 border rounded-md  shadow {cls}" on:click>
	<slot/>
</button>