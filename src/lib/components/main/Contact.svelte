<script>
  import { Heading } from "flowbite-svelte";
  import DividerLight from "../dividers/DividerLight.svelte";
</script>

<DividerLight id="contact" />
<section>
  <div class="max-w-screen-lg mx-auto p-6 smd:p-10 bg-light-primary dark:bg-background-grey mb-10">
    <Heading tag="h2" class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10">Contact Me</Heading>
    <div class="dark:text-white md:flex mb-10">
      <div class="hidden md:block p-3 md:basis-4/12 md:mx-3">
        <img class="rounded-3xl w-fit shadow-md dark:shadow-highlights" src="/assets/images/leos_all_ears.jpg" alt="My Dog Leo" />
      </div>
      <div class="md: basis-8/12 p-3 mx-auto text-center">
        <div class="mb-5 md:mt-6">
          <p>Want to get in touch were all ears!</p>
        </div>
        <div class="flex justify-evenly p-2 pt-3 rounded-xl dark:bg-light-primary dark:text-gray-900">
          <a href="mailto:alexanderbarrett189@gmail.com" rel="noopener noreferrer" target="_blank">
            <img src="/assets//images/tool_icons/gmail.png" alt="Gmail icon" aria-hidden="true" class="w-16 h-16" />
            Gmail</a
          >
          <a href="https://www.linkedin.com/in/alexander-barrett-64568a47/" target="_blank" class="mx-5">
            <img src="assets/images/tool_icons/linkedin(1).png" alt="Linkedin icon" aria-hidden="true" class="w-16 h-16" />
            Linkedin</a
          >
          <a href="https://discordapp.com/users/178264761199362048" rel="noopener noreferrer" target="_blank">
            <img src="/assets//images/tool_icons/discord.svg" alt="discord icon" aria-hidden="true" class="w-16 h-16" />
            Discord</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
