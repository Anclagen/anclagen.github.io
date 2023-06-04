<script lang="ts">
	import Banner from './lib/components/main/Banner.svelte';
	import About from './lib/components/main/About.svelte';
	import Contact from './lib/components/main/Contact.svelte';
	import Projects from './lib/components/main/Projects.svelte';
	import Skills from './lib/components/main/Skills.svelte';
	import Footer from './lib/components/layout/Footer.svelte';
  import Nav from './lib/components/layout/Nav.svelte';
	import { onMount } from 'svelte';

	let navLinks: NodeListOf<HTMLAnchorElement>;
	onMount(() => {
		window.addEventListener('scroll', updateNavActiveLink);
		const sections: NodeListOf<HTMLElement> = document.querySelectorAll(
			'#home, #about, #skills, #projects, #contact'
		);
		navLinks = document.querySelectorAll('.nav-links');
		updateNavActiveLink();

		//https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
		function updateNavActiveLink() {
			let currentPosition: string | null = '';
			sections.forEach((section: HTMLElement) => {
				const currentSection = section.offsetTop;
				if (window.scrollY >= currentSection - 400) {
					currentPosition = section.getAttribute('id');
				}
			});
			navLinks.forEach((a) => {
				a.classList.remove('underline');
				if (currentPosition && a.hash.includes(currentPosition)) {
					a.classList.add('underline');
				}
			});
		}
	});
</script>
<Nav />
<Banner />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
