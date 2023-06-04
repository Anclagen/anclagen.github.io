<script lang="ts">
	import { Heading } from 'flowbite-svelte';
</script>

<div
	class="flex min-h-screen justify-center items-center bg-banner2 dark:bg-banner1 bg-cover bg-center"
	id="home"
>
	<div
		class="w-full sm:w-96 py-3 px-5 bg-light-primary dark:bg-primary dark:text-white rounded-2xl shadow-xl dark:shadow-highlights"
	>
		<Heading tag="h1" class="text-center text-primary dark:text-light-primary mb-4"
			>Hi, I'm Alexander</Heading
		>
		<img src="/assets/images/alexander_barrett.jpg" alt="Image of Alexander" />
		<p class="my-2 text-xl">I'm an aspiring front end developer.</p>
	</div>
</div>
