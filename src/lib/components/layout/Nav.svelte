<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { dark } from '../../stores/darkMode';
	import { onMount } from 'svelte';
	import { Collapse } from 'flowbite';
	import type { CollapseInterface } from 'flowbite';

	let darkmodebtn =
		'text-primary dark:text-light-primary hover:bg-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary dark:focus:ring-light-primary rounded-lg text-lg p-2.5';

	onMount(() => {
		dark.set(document.documentElement.classList.contains('dark'));
		// setup for open and close navbar on mobile
		const targetEl: HTMLElement | null = document.getElementById('navbar-sticky');
		const triggerEl: HTMLElement | null = document.getElementById('navbar-sticky-btn');
		const collapse: CollapseInterface = new Collapse(targetEl, triggerEl);
	});

	const toggleDarkMode = () => {
		dark.set(!$dark);
	};
</script>

<nav
	class="bg-light-primary dark:bg-primary fixed w-full z-20 top-0 left-0 border-b border-primary dark:border-light-primary"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center pl-2 rounded bg-primary">
			<img src="/assets/images/logo.png" class="h-11 mr-3" alt="A J Barrett Logo" />
		</a>
		<div class="flex md:order-2">
			<div on:click={toggleDarkMode}>
				<DarkMode btnClass={darkmodebtn} />
			</div>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center ml-3 p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-primary dark:text-light-primary hover:bg-primary hover:text-light-primary dark:hover:bg-light-primary dark:hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary dark:focus:ring-light-primary"
				aria-controls="navbar-sticky"
				aria-expanded="false"
				id="navbar-sticky-btn"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div
			class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-sticky"
		>
			<ul
				class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:bg-light-primary dark:bg-primary"
			>
				<li>
					<a
						href="/#home"
						class="nav-links block py-2 pl-3 pr-4 hover:text-blue text-gray dark:text-light-primary rounded md:p-0"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="/#about"
						class="nav-links block py-2 pl-3 pr-4 text-gray dark:text-light-primary rounded md:p-0"
						>About</a
					>
				</li>
				<li>
					<a
						href="/#skills"
						class="nav-links block py-2 pl-3 pr-4 text-gray dark:text-light-primary rounded md:p-0"
						>Skills</a
					>
				</li>
				<li>
					<a
						href="/#projects"
						class="nav-links block py-2 pl-3 pr-4 text-gray dark:text-light-primary rounded md:p-0"
						>Projects</a
					>
				</li>
				<li>
					<a
						href="/#contact"
						class="nav-links block py-2 pl-3 pr-4 text-gray dark:text-light-primary rounded md:p-0"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
