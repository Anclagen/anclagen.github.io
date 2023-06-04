<script>
	import { Heading } from 'flowbite-svelte';
	import DividerLight from '../dividers/DividerLight.svelte';
</script>

<DividerLight id="contact" />
<section>
	<div class="dark:bg-background-grey">
		<Heading
			tag="h2"
			class="text-5xl font-extrabold text-gray-900 dark:text-white w-full text-center text-primary dark:text-light-primary mb-10"
		>
			Contact Me
		</Heading>
		<div class="content-cont-style dark:text-white">
			<div class="page-wrapper-small">
				<p>Feel free to contact me using the methods below. I look forward to hearing from you.</p>
			</div>
			<div class="contact-methods page-wrapper-small">
				<a href="mailto:alexanderbarrett189@gmail.com" rel="noopener noreferrer" target="_blank">
					<!-- <img src="/assets//images/tool-icons/gmail.png" alt="Gmail icon" /> -->
					<p>Gmail</p></a
				>
				<a href="https://www.linkedin.com/in/alexander-barrett-64568a47/" target="_blank">
					<!-- <img src="/images/tool-icons/linkedin(1).png" alt="Linkedin icon" /> -->
					<p>Linkedin</p></a
				>
				<a
					href="https://discordapp.com/users/178264761199362048"
					rel="noopener noreferrer"
					target="_blank"
				>
					<!-- <img src="/assets//images/tool-icons/discord(1).png" alt="discord icon" /> -->
					<p>Discord</p></a
				>
			</div>
			<div class="contact-form page-wrapper-small">
				<!-- needs a new hook up 
              <div class="button-center"><button class="display-form">Contact Form</button></div> -->
			</div>
		</div>
	</div>
</section>
