<script lang="ts">
	import { Button, Modal, Carousel } from 'flowbite-svelte';
	import type { Project } from '../../data/projects';
	import Link from '../buttons/Link.svelte';
	import { skills } from '../../data/skills';
	export let project: Project;
	let stack = skills.filter((skill) => project.stack.includes(skill.name));
	let open = false;
	let outsideclose = true;
	let showCaptions = false;
	let showThumbs = false;
	let showIndicators = false;
</script>

<Button
	on:click={() => (open = true)}
	class="transition-all duration-300 w-full mt-5 bg-primary border border-primary dark:border-light-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary"
	>More Details</Button
>

<Modal id={project.slug} title={project.title} bind:open size="lg">
	<Carousel
		images={project.images}
		divClass="overflow-hidden relative rounded-lg"
		{showCaptions}
		{showThumbs}
		{showIndicators}
	/>
	{#each project.content as paragraph}
		<p class="mb-3 mx-5">{paragraph}</p>
	{/each}
	<div class="flex mx-5">
		{#each stack as skill}
			<img src={skill.imgSrc} alt={skill.name} class="w-16 h-16 mr-6 shadow rounded-xl" />
		{/each}
	</div>
	<svelte:fragment slot="footer">
		{#if project.liveUrl}
			<Link href={project.liveUrl}>Live Demo</Link>
		{/if}
		{#if project.github}
			<Link href={project.github}>GitHub Repo</Link>
		{/if}
	</svelte:fragment>
</Modal>
