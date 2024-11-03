<script lang="ts">
  export let id = "my-window";
  export let title = "My Window";

  let titleId = `${id}-title`;

  let fullscreen = false;
</script>

<section class="window glass-box" {id} aria-labelledby={titleId} class:fullscreen>
  <div class="window-decoration">
    <div class="circles">
      <span class="circle red"></span>
      <span class="circle yellow"></span>
      <button class="circle green" aria-label="maximize" on:click={() => (fullscreen = !fullscreen)}
      ></button>
    </div>
    <h2 id={titleId}>{title}</h2>
  </div>

  <slot />
</section>

<style>
  .window {
    font-family: system-ui, sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .fullscreen {
    position: fixed;
    inset: 1rem;
    z-index: 1000;
    max-height: 100%;
  }

  .window-decoration {
    font-weight: bold;
    text-shadow: 0 1px 0 var(--color-slate-050);
    color: var(--color-slate-800);
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid var(--color-slate-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: bold;
  }

  .circles {
    position: absolute;
    left: 1rem;
    display: flex;
    gap: 0.75rem;
  }

  .circle {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: block;
    background: var(--circle-color);

    &.red {
      --circle-color: var(--root-loops-ansi-red);
    }

    &.yellow {
      --circle-color: var(--root-loops-ansi-yellow);
    }

    &.green {
      --circle-color: var(--root-loops-ansi-green);
    }
  }
</style>
