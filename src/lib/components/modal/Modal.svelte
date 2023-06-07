<script lang="ts">
  import { Button, Modal, Carousel } from "flowbite-svelte";
  import type { Project } from "../../data/projects";
  import Link from "../buttons/Link.svelte";
  import { skills } from "../../data/skills";
  export let project: Project;
  let stack = skills.filter((skill) => project.stack.includes(skill.name));
  let open = false;
  let outsideclose = true;
  let showCaptions = false;
  let showThumbs = false;
  let showIndicators = false;
</script>

<button
  on:click={() => (open = true)}
  class="transition-all duration-300 w-full mt-5 bg-primary border border-primary dark:border-light-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-md text-white focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg"
  >More Details</button
>

<Modal id={project.slug} title={project.title} bind:open size="lg" backdropClasses="bg-light-primary bg-opacity-50 dark:bg-backgroundgrey" color="purple">
  <Carousel images={project.images} divClass="overflow-hidden relative rounded-lg" {showCaptions} {showThumbs} {showIndicators} />
  {#each project.content as paragraph}
    <p class="mb-3 mx-5 text-gray-900">{paragraph}</p>
  {/each}
  <div class="flex mx-5 flex-wrap">
    {#each stack as skill}
      <img src={skill.imgSrc} alt={skill.name} class="w-16 h-16 mr-6 mt-3 shadow rounded-xl" />
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
