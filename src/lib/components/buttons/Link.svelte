<script lang="ts">
	export let href = '';
	export let linkClass = '';
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="transition-all duration-300 border border-primary p-2 bg-primary border border-light-primary dark:bg-light-primary dark:text-primary text-light-primary hover:bg-light-primary hover:text-primary dark:hover:bg-primary dark:hover:text-light-primary rounded-xl {linkClass}"
>
	<slot />
</a>
