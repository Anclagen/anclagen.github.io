<script lang="ts">
  import { dark } from "../../stores/darkMode";
  export let id = "";
  let imgSrc = "";

  $: {
    imgSrc = $dark ? "/assets/images/dankone.jpg" : "/assets/images/light_treeline_divider.jpg";
  }
</script>

<div class="overflow-x-hidden flex items-center justify-center">
  <img {id} src={imgSrc} alt="Section Divider" class="w-full h-full object-cover object-center" />
</div>

<style>
  img {
    min-height: 15rem;
  }
</style>
