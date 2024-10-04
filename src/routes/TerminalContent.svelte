<script lang="ts">
  export let command: string;
</script>

<div class="prompt">
  <span class="ansi-green-fg">loops@cereal</span>:<span class="ansi-blue-fg">~/dev/root-loops</span
  >$ {command}
</div>

<pre>
<slot />
</pre>

<div class="prompt">
  <span class="ansi-green-fg">loops@cereal</span>:<span class="ansi-blue-fg">~/dev/root-loops</span
  >$ <span class="blink">█</span>
</div>

<style>
  .blink {
    animation: blink 500ms infinite alternate;
    color: var(--root-loops-cursor);
  }

  .prompt {
    text-wrap: nowrap;
  }

  pre {
    padding: 1.5rem 0;
    margin: 0;
    font-family: inherit;
    line-height: 1.15em;
  }

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  :global(.ansi-black-fg) {
    color: var(--root-loops-ansi-black);
  }
  :global(.ansi-red-fg) {
    color: var(--root-loops-ansi-red);
  }
  :global(.ansi-green-fg) {
    color: var(--root-loops-ansi-green);
  }
  :global(.ansi-yellow-fg) {
    color: var(--root-loops-ansi-yellow);
  }
  :global(.ansi-blue-fg) {
    color: var(--root-loops-ansi-blue);
  }
  :global(.ansi-magenta-fg) {
    color: var(--root-loops-ansi-magenta);
  }
  :global(.ansi-cyan-fg) {
    color: var(--root-loops-ansi-cyan);
  }
  :global(.ansi-white-fg) {
    color: var(--root-loops-ansi-white);
  }
  :global(.ansi-bright-black-fg) {
    color: var(--root-loops-ansi-bright-black);
  }
  :global(.ansi-bright-red-fg) {
    color: var(--root-loops-ansi-bright-red);
  }
  :global(.ansi-bright-green-fg) {
    color: var(--root-loops-ansi-bright-green);
  }
  :global(.ansi-bright-yellow-fg) {
    color: var(--root-loops-ansi-bright-yellow);
  }
  :global(.ansi-bright-blue-fg) {
    color: var(--root-loops-ansi-bright-blue);
  }
  :global(.ansi-bright-magenta-fg) {
    color: var(--root-loops-ansi-bright-magenta);
  }
  :global(.ansi-bright-cyan-fg) {
    color: var(--root-loops-ansi-bright-cyan);
  }
  :global(.ansi-bright-white-fg) {
    color: var(--root-loops-ansi-bright-white);
  }
  :global(.ansi-black-bg) {
    background-color: var(--root-loops-ansi-black);
  }
  :global(.ansi-red-bg) {
    background-color: var(--root-loops-ansi-red);
  }
  :global(.ansi-green-bg) {
    background-color: var(--root-loops-ansi-green);
  }
  :global(.ansi-yellow-bg) {
    background-color: var(--root-loops-ansi-yellow);
  }
  :global(.ansi-blue-bg) {
    background-color: var(--root-loops-ansi-blue);
  }
  :global(.ansi-magenta-bg) {
    background-color: var(--root-loops-ansi-magenta);
  }
  :global(.ansi-cyan-bg) {
    background-color: var(--root-loops-ansi-cyan);
  }
  :global(.ansi-white-bg) {
    background-color: var(--root-loops-ansi-white);
  }
  :global(.ansi-bright-black-bg) {
    background-color: var(--root-loops-ansi-bright-black);
  }
  :global(.ansi-bright-red-bg) {
    background-color: var(--root-loops-ansi-bright-red);
  }
  :global(.ansi-bright-green-bg) {
    background-color: var(--root-loops-ansi-bright-green);
  }
  :global(.ansi-bright-yellow-bg) {
    background-color: var(--root-loops-ansi-bright-yellow);
  }
  :global(.ansi-bright-blue-bg) {
    background-color: var(--root-loops-ansi-bright-blue);
  }
  :global(.ansi-bright-magenta-bg) {
    background-color: var(--root-loops-ansi-bright-magenta);
  }
  :global(.ansi-bright-cyan-bg) {
    background-color: var(--root-loops-ansi-bright-cyan);
  }
  :global(.ansi-bright-white-bg) {
    background-color: var(--root-loops-ansi-bright-white);
  }
</style>
