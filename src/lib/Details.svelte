<script lang="ts">
	export let title: string;
	export let cls: string = '';
</script>

<details class="shadow mb-4 rounded-md overflow-hidden {cls}">
	<summary class="p-4 border-b">
		{title}
	</summary>
	<slot/>
</details>