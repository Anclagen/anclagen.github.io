<script lang="ts">
  import { Heading, Card, Button, ButtonGroup } from "flowbite-svelte";
  import { projects } from "../../data/projects";
  import DividerLight from "../dividers/DividerLight.svelte";
  import Link from "../buttons/Link.svelte";
  import Modal from "../modal/Modal.svelte";

  let filter = "All";
  let filteredProjects = projects;

  const updateFilter = function (e: any) {
    filter = e.target.innerText;
    console.log;
    if (filter === "All") {
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
      <Heading tag="h2" class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10">Recent Projects</Heading>

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
            <Heading tag="h3" class="text-center text-primary dark:text-light-primary font-semibold text-xl">{project.title}</Heading>
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
  <div class="text-primary dark:text-light-primary max-w-screen-lg mx-auto mb-16 px-5">
    <Heading tag="h2" class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10">Ongoing Collaborations</Heading>

    <div class="flex flex-wrap">
      <div class="md:basis-6/12 p-3">
        <Heading tag="h3" class="text-center text-primary dark:text-light-primary font-semibold text-xl mb-5">Mollify</Heading>
        <p>
          As part of my final exam at Noroff I undertook an experimental brief, myself and a group of students worked as developers on an open source learning management platform, with are tutor
          acting as scrum master. This is on ongoing project that I intend to continue contributing to, as this platform will be useful for future students.
        </p>
        <div class="text-center mt-5">
          <Link href="https://github.com/Fermain/-mollify">GitHub Repo</Link>
        </div>
      </div>
      <div class="md:basis-6/12 p-3 mt-8 md:mt-0">
        <Heading tag="h3" class="text-center text-primary dark:text-light-primary font-semibold text-xl mb-5">Noroff Jobs API</Heading>
        <p>
          I am intermittently working with students from other classes on an API. This uses Node, Express, and Prisma to interact with a PostgreSQL database to serve the front end of Noroff's own job
          and placement website.
        </p>
        <div class="text-center mt-5">
          <Link href="https://github.com/NoroffFEU/agency-api.noroff.dev">GitHub Repo</Link>
        </div>
      </div>
    </div>
  </div>
</section>
