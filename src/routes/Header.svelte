<script>
  import HelpCircleIcon from "svelte-feather-icons/src/icons/HelpCircleIcon.svelte";
  import { slide } from "svelte/transition";

  let expanded = $state(false);
</script>

<header>
  <div class="label">
    <h1>
      R<span class="green">o</span><span class="magenta">o</span>t <br /> L<span class="blue"
        >o</span
      ><span class="yellow">o</span>ps
    </h1>
    <p class="subtitle">
      Code color schemes for cereal lovers.
      <button onclick={() => (expanded = !expanded)}><HelpCircleIcon /></button>
    </p>

    {#if expanded}
      <div class="reveal" transition:slide={{ duration: 300, axis: "y" }}>
        <p>
          <strong>Root Loops</strong> makes creating a beautiful, custom color schemes for your favorite
          terminal, code editor, or syntax highlighting engine as easy as making a bowl of cereal.
        </p>
        <p>
          Tweak the sliders below and check out the preview until you're happy with the result. Copy
          the colors to your favorite tool or use the export functionality to generate a
          configuration for your favorite tool.
        </p>
      </div>
    {/if}
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 0 1rem 1rem 1rem;
    margin-bottom: 2rem;
  }

  button {
    background: none;
    color: var(--color-slate-050);
    vertical-align: middle;
  }

  .reveal {
    font-size: 0.9rem;
    line-height: 1em;
    color: var(--color-slate-050);
    text-align: left;
  }

  .label {
    background: radial-gradient(
      farthest-corner at 50% 20px,
      var(--color-red-400) 0%,
      var(--color-red-700) 70%,
      var(--color-red-900) 100%
    );
    display: inline-block;
    text-align: center;
    padding: 1rem;
    max-width: min(40ch, 100%);
    min-width: min(40ch, 100%);
    border-radius: 0 0 1rem 1rem;
    border: 0.2rem solid var(--color-red-100);
    outline: 0.3rem solid var(--color-red-800);
    border-top: none;
    box-shadow:
      0 0.5rem 1rem #0006,
      0 0.6rem 1.5rem #0004;
  }

  h1 {
    font-size: clamp(5rem, 8vw + 2rem, 7rem);
    text-transform: uppercase;
    font-weight: 900;
    margin: 1rem 0 0.5rem 0;
    font-family: "Luckiest Guy", system-ui;
    color: var(--color);
    letter-spacing: 1px;
    line-height: 0.8em;
  }

  h1,
  .green,
  .magenta,
  .blue,
  .yellow {
    color: var(--color);
    text-shadow:
      0 -1px 0 var(--highlight),
      0 1px 0 var(--darker-shade),
      0 1px 0 var(--shade),
      0 2px 0 var(--shade),
      0 3px 0 var(--shade),
      0 4px 0 var(--shade),
      0 5px 0 var(--shade),
      0 6px 0 var(--shade),
      0 7px 0 var(--shade),
      0 0.75rem 0.5rem #0006,
      0 1rem 2rem #0004,
      0 1rem 3rem #0002;
  }

  h1 {
    --color: var(--color-slate-050);
    --shade: color-mix(in srgb, var(--color) 70%, black);
    --highlight: color-mix(in srgb, var(--color) 50%, white);
    --darker-shade: color-mix(in srgb, var(--color) 70%, black);
  }

  .green {
    --color: var(--root-loops-ansi-bright-green);
    --shade: color-mix(in hsl, var(--color) 80%, black);
    --highlight: color-mix(in hsl, var(--color) 50%, white);
    --darker-shade: color-mix(in hsl, var(--color) 90%, black);
  }

  .magenta {
    --color: var(--root-loops-ansi-bright-magenta);
    --shade: color-mix(in hsl, var(--color) 80%, black);
    --highlight: color-mix(in hsl, var(--color) 50%, white);
    --darker-shade: color-mix(in hsl, var(--color) 90%, black);
  }

  .blue {
    --color: var(--root-loops-ansi-bright-blue);
    --shade: color-mix(in hsl, var(--color) 80%, black);
    --highlight: color-mix(in hsl, var(--color) 50%, white);
    --darker-shade: color-mix(in hsl, var(--color) 90%, black);
  }

  .yellow {
    --color: var(--root-loops-ansi-bright-yellow);
    --shade: color-mix(in hsl, var(--color) 80%, black);
    --highlight: color-mix(in hsl, var(--color) 50%, white);
    --darker-shade: color-mix(in hsl, var(--color) 90%, black);
  }

  p.subtitle {
    margin: 0;
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1em;
    color: var(--color-slate-050);
  }
</style>
