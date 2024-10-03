<script lang="ts">
  import { GiftIcon } from "svelte-feather-icons";
</script>

<footer>
  <div class="content">
    <iframe
      class="github-button"
      src="https://ghbtns.com/github-btn.html?user=hamvocke&repo=root-loops&type=star&count=true&size=large"
      frameborder="0"
      scrolling="0"
      width="170"
      height="30"
      title="GitHub"
    ></iframe>

    <a href="/changelog">
      <GiftIcon size="20" />
      What's new?
    </a>

    <div class="credit"><a href="https://hamvocke.com">Made by Ham &lt;3</a></div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    font-family: "Fira Code", monospace;
    background: linear-gradient(to bottom, transparent, var(--color-slate-050));
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(900px, 100% - 2rem);
    padding: 2rem 3rem 1rem 3rem;
  }

  a {
    color: var(--color-slate-800);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
