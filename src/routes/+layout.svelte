<script lang="ts">
  import "@fontsource/luckiest-guy";
  import "@fontsource-variable/fira-code";
  import "./styles.css";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}
