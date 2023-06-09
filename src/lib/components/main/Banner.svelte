<script lang="ts">
  import { Heading } from "flowbite-svelte";
  import Link from "../buttons/Link.svelte";
</script>

<div class="flex min-h-screen justify-center items-center bg-banner2 dark:bg-banner1 bg-cover bg-center" id="home">
  <div class="w-96 py-3 px-5 bg-light-primary dark:bg-primary dark:text-white rounded-2xl shadow-xl dark:shadow-highlights">
    <Heading tag="h1" class="text-center text-primary text-bold dark:text-light-primary mb-6">Front-End Developer</Heading>
    <img src="/assets/images/alexander_barrett.jpg" alt="Alexander Barrett" />
    <p class="my-2 text-2xl text-center">Hi, I'm Alexander, a front-end developer striving for fullstack.</p>
    <div class="flex flex-wrap justify-evenly">
      <a
        href="/#skills"
        class="transition-all duration-300 border border-primary p-2 bg-primary border border-light-primary dark:bg-light-primary dark:hover:border-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary rounded-xl text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-md text-white focus:ring-blue-300 dark:focus:ring-blue-800 mt-4 mb-3"
        >Skills</a
      >
      <a
        href="/#projects"
        class="transition-all duration-300 border border-primary p-2 bg-primary border border-light-primary dark:bg-light-primary dark:hover:border-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary rounded-xl text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-md text-white focus:ring-blue-300 dark:focus:ring-blue-800 mt-4 mb-3"
        >Projects</a
      >
    </div>
  </div>
</div>
