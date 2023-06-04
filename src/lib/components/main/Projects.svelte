<script lang="ts">
	import { Heading, Card, Button, ButtonGroup } from 'flowbite-svelte';
	import { projects } from '../../data/projects';
	import DividerLight from '../dividers/DividerLight.svelte';
	import Link from '../buttons/Link.svelte';
	import Modal from '../modal/Modal.svelte';

	let filter = 'All';
	let filteredProjects = projects;

	const updateFilter = function (e: any) {
		filter = e.target.innerText;
		console.log;
		if (filter === 'All') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((project) => project.stack.includes(filter));
		}
	};
</script>

<DividerLight id="projects" />
<section>
	<div class="mx-auto p-6 smd:p-10 bg-light-primary dark:bg-background-grey mb-16">
		<div class="max-w-screen-xl mx-auto">
			<Heading
				tag="h2"
				class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10"
			>
				Recent Projects
			</Heading>

			<!-- Filters based on stack -->
			<div class="mx-auto mb-5 w-fit">
				<ButtonGroup>
					<Button
						class="w-full mt-5 bg-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary focus:bg-primary focus:bg-gray-900 focus:text-white"
						on:click={updateFilter}>All</Button
					>
					<Button
						class="w-full mt-5 bg-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary"
						on:click={updateFilter}>JavaScript</Button
					><Button
						class="w-full mt-5 bg-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary"
						on:click={updateFilter}>TypeScript</Button
					><Button
						class="w-full mt-5 bg-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary"
						on:click={updateFilter}>React</Button
					></ButtonGroup
				>
			</div>
			<div class="text-center text-semibold">Viewing {filter}</div>
			<div class="flex flex-wrap justify-center">
				{#each filteredProjects as project}
					<Card img={project.imageSrc} class=" dark:text-light-primary dark:bg-primary m-2 ">
						<Heading
							tag="h3"
							class="text-center text-primary dark:text-light-primary font-semibold text-xl"
							>{project.title}</Heading
						>
						<p class="text-center text-primary dark:text-light-primary mt-2">
							{project.description}
						</p>
						<div class="my-2 flex justify-evenly">
							{#if project.liveUrl}
								<Link href={project.liveUrl}>Live Demo</Link>
							{/if}
							{#if project.github}
								<Link href={project.github}>GitHub Repo</Link>
							{/if}
						</div>
						<Modal {project} />
					</Card>
				{/each}
			</div>
		</div>
	</div>
	<div class="text-primary dark:text-light-primary max-w-screen-lg mx-auto mb-16">
		<Heading
			tag="h2"
			class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10"
		>
			Ongoing Collaborations
		</Heading>

		<div class="page-wrapper-small">
			<p>
				Always eager to learn new technologies and grow as a developer. I am currently working with
				Node, Express, and Prisma to create the backend of a server to become Noroff's own job and
				placement website. As well as getting familiar with React and Tailwind in my free time.
			</p>
		</div>
	</div>
</section>
