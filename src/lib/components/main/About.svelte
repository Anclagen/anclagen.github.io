<script lang="ts">
  import { about } from "../../data/about";
  import { Heading, P } from "flowbite-svelte";
  import DividerLight from "../dividers/DividerLight.svelte";
</script>

<DividerLight id="about" />

<section class=" dark:text-light-primary bg-light-primary dark:bg-background-grey mb-16">
  <div class="p-6 smd:p-10">
    <div class="max-w-screen-lg mx-auto">
      <Heading tag="h2" class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10">About Me</Heading>
      <div class="md:flex mb-10">
        <div class="md:basis-7/12 p-3">
          <p class="my-2 mt-3">
            {about.paragraph1}
          </p>
          <p class="my-2">
            {about.paragraph2}
          </p>
          <p class="my-2">
            {about.paragraph3}
          </p>
        </div>
        <div class="p-3 md:basis-5/12">
          <img class="rounded-3xl w-fit shadow-md dark:shadow-highlights" src="/assets/images/Happy_dog.jpg" alt="My Dog Leo" />
        </div>
      </div>
    </div>
  </div>
</section>
