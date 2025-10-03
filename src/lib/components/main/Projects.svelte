<script lang="ts">
  import { Heading, Card, Accordion, AccordionItem } from "flowbite-svelte";
  import DividerLight from "../dividers/DividerLight.svelte";
  import Link from "../buttons/Link.svelte";
  import ProjectModal from "../modal/Modal.svelte";

  import {
    showcaseProjects,
    collaborationProjects,
    archiveProjects,
    type Project,
  } from "../../data/projects";

  // sanity: see counts in console; if 0/0/0, your data exports are wrong
  console.log({
    showcase: showcaseProjects?.length,
    collab: collaborationProjects?.length,
    archive: archiveProjects?.length,
  });
</script>

<DividerLight id="projects" />

<section class="dark:text-light-primary">
  <div class="mx-auto p-6 smd:p-10 max-w-screen-xl">
    <Heading
      tag="h2"
      class="text-5xl font-extrabold text-center mb-10 text-primary dark:text-light-primary"
    >
      Projects
    </Heading>

    <!-- MOBILE: accordion -->
    <div class="block lg:hidden">
      <Accordion flush>
        <AccordionItem open>
          <h3 slot="header" class="text-lg font-semibold">Showcase Projects</h3>
          {#if showcaseProjects && showcaseProjects.length}
            <div class="flex flex-wrap items-center justify-center">
              {#each showcaseProjects as project}
                <Card img={project.imageSrc} class="m-3 dark:bg-primary dark:text-light-primary">
                  <Heading tag="h4" class="text-xl font-semibold text-center"
                    >{project.title}</Heading
                  >
                  <p class="text-center mt-2">{project.description}</p>
                  <div class="my-2 flex justify-evenly">
                    {#if project.realSite}<Link href={project.realSite}>Live Site</Link>{/if}
                    {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
                    {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
                  </div>
                  <ProjectModal {project} />
                </Card>
              {/each}
            </div>
          {:else}
            <p class="px-3 py-2 text-sm text-gray-500">No showcase projects found.</p>
          {/if}
        </AccordionItem>

        <AccordionItem>
          <h3 slot="header" class="text-lg font-semibold">Collaborations</h3>
          {#if collaborationProjects && collaborationProjects.length}
            <div class="flex flex-wrap items-center justify-center">
              {#each collaborationProjects as project}
                <Card img={project.imageSrc} class="m-3 dark:bg-primary dark:text-light-primary">
                  <Heading tag="h4" class="text-xl font-semibold text-center"
                    >{project.title}</Heading
                  >
                  <p class="text-center mt-2">{project.description}</p>
                  <div class="my-2 flex justify-evenly">
                    {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
                    {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
                  </div>
                  <ProjectModal {project} />
                </Card>
              {/each}
            </div>
          {:else}
            <p class="px-3 py-2 text-sm text-gray-500">No collaboration projects found.</p>
          {/if}
        </AccordionItem>

        <AccordionItem>
          <h3 slot="header" class="text-lg font-semibold">Archive</h3>
          {#if archiveProjects && archiveProjects.length}
            <div class="flex flex-wrap items-center justify-center">
              {#each archiveProjects as project}
                <Card img={project.imageSrc} class="m-3 dark:bg-primary dark:text-light-primary">
                  <Heading tag="h4" class="text-xl font-semibold text-center"
                    >{project.title}</Heading
                  >
                  <p class="text-center mt-2">{project.description}</p>
                  <div class="my-2 flex justify-evenly">
                    {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
                    {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
                  </div>
                  <ProjectModal {project} />
                </Card>
              {/each}
            </div>
          {:else}
            <p class="px-3 py-2 text-sm text-gray-500">No archive projects found.</p>
          {/if}
        </AccordionItem>
      </Accordion>
    </div>

    <!-- DESKTOP: grid -->
    <div class="hidden lg:block">
      <Heading tag="h3" class="text-3xl font-bold text-center mb-6">Showcase</Heading>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {#each showcaseProjects as project}
          <Card img={project.imageSrc} class="dark:bg-primary dark:text-light-primary">
            <Heading tag="h4" class="text-xl font-semibold text-center">{project.title}</Heading>
            <p class="text-center mt-2">{project.description}</p>
            <div class="my-2 flex justify-evenly">
              {#if project.realSite}<Link href={project.realSite}>Live Site</Link>{/if}
              {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
              {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
            </div>
            <ProjectModal {project} />
          </Card>
        {/each}
      </div>

      <Heading tag="h3" class="text-3xl font-bold text-center mb-6">Collaborations</Heading>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {#each collaborationProjects as project}
          <Card img={project.imageSrc} class="dark:bg-primary dark:text-light-primary">
            <Heading tag="h4" class="text-xl font-semibold text-center">{project.title}</Heading>
            <p class="text-center mt-2">{project.description}</p>
            <div class="my-2 flex justify-evenly">
              {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
              {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
            </div>
            <ProjectModal {project} />
          </Card>
        {/each}
      </div>

      <Heading tag="h3" class="text-3xl font-bold text-center mb-6">Archive</Heading>
      <p class="text-center mb-6 text-gray-600 dark:text-gray-300">
        Earlier coursework and projects that shaped my learning journey.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each archiveProjects as project}
          <Card img={project.imageSrc} class="dark:bg-primary dark:text-light-primary">
            <Heading tag="h4" class="text-xl font-semibold text-center">{project.title}</Heading>
            <p class="text-center mt-2">{project.description}</p>
            <div class="my-2 flex justify-evenly">
              {#if project.liveUrl}<Link href={project.liveUrl}>Live Demo</Link>{/if}
              {#if project.github}<Link href={project.github}>GitHub Repo</Link>{/if}
            </div>
            <ProjectModal {project} />
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>
