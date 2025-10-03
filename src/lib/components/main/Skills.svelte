<script lang="ts">
  import { Heading } from "flowbite-svelte";
  import { skillCategories } from "../../data/skills";
  import DividerLight from "../dividers/DividerLight.svelte";
</script>

<DividerLight id="skills" />
<section class="dark:text-light-primary">
  <div class="mx-auto mb-16 p-6 smd:p-10">
    <div class="max-w-screen-lg mx-auto">
      <Heading tag="h2" class="text-5xl font-extrabold text-center mb-10 dark:text-light-primary">
        Technical Skills
      </Heading>

      <div class="space-y-8">
        {#each skillCategories as category}
          <div>
            <h3 class="text-xl font-semibold mb-3">{category.title}</h3>
            <ul class="flex flex-wrap gap-2">
              {#each category.skills as skill}
                <li
                  class="px-3 py-1 rounded-full text-light-primary dark:text-black bg-primary dark:bg-light-primary text-sm"
                >
                  {skill}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
