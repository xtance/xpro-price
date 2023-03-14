<script lang="ts">
    import { download } from "../help/download";
    import { copy } from "../help/copy";
    import Button from "./Button.svelte";

	export let fileName: string;
	export let text: string;
	export let close: () => void;


</script>

<main class="fixed top-0 left-0 p-4 w-screen h-screen bg-black/10">
	<div class="w-full h-full bg-white rounded-md overflow-hidden">
		

		<div class="flex justify-between">
			<Button on:click={() => copy(text) && close()}>
				Скопировать
			</Button>

			<Button on:click={() => download(fileName, text) && close()}>
				Скачать
			</Button>

			<Button on:click={close} cls="bg-red-200">
				Закрыть
			</Button>
		</div>

		


		<div class="p-4 border-y">
			<code class="select-text">
				{text}
			</code>
		</div>
		
	</div>
</main>