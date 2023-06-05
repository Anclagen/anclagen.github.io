<script lang="ts">
  import { Heading } from "flowbite-svelte";
  import { skills } from "../../data/skills";
  import DividerLight from "../dividers/DividerLight.svelte";
</script>

<DividerLight id="skills" />
<section class="dark:text-light-primary">
  <div class="mx-auto mb-16 p-6 smd:p-10 mx-auto">
    <div class="max-w-screen-lg mx-auto">
      <Heading tag="h2" class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10">My Skills & Tools</Heading>
      <p class="my-2 text-center">These are some of the skills and tools I've used to bring my projects to life so far.</p>
      <ul class=" flex auto-cols-auto flex-wrap justify-center">
        {#each skills as skill}
          <li class="w-28 text-center px-4 py-4">
            <img class="mx-auto skill-img rounded-lg" src={skill.imgSrc} alt={skill.name + " icon"} />
            <p>{skill.name}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  .skill-img {
    width: 48px;
    height: 48px;
  }
</style>
