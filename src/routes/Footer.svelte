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
      width="150"
      height="30"
      title="GitHub"
    ></iframe>

    <a href="/changelog">
      <GiftIcon size="20" />
      What's new?
    </a>

    <div class="credit"><a href="https://hamvocke.com">Made by Ham</a></div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    font-family: "Fira Code Variable", monospace;
    background: linear-gradient(to bottom, transparent, var(--color-slate-050));
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(900px, 100% - 2rem);
    padding: 2rem 0 1rem 0;
    font-size: 0.9rem;
  }

  a {
    color: var(--color-slate-800);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
