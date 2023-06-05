<script lang="ts">
	export let href = '';
	export let linkClass = '';
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="transition-all duration-300 border border-primary p-2 bg-primary border border-light-primary dark:bg-light-primary dark:hover:border-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary rounded-xl  text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-md text-white focus:ring-blue-300 dark:focus:ring-blue-800  {linkClass}"
>
	<slot />
</a>
