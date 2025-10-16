<script>
  import { resolve } from "$app/paths";
</script>

<header>
  <a class="label" href={resolve("/")}>
    <h1>
      R<span class="green">o</span><span class="magenta">o</span>t <br /> L<span class="blue"
        >o</span
      ><span class="yellow">o</span>ps
    </h1>
    <p>Terminal color schemes for cereal lovers.</p>
  </a>
</header>

<style>
  header {
    text-align: center;
    padding: 0 1rem 1rem 1rem;
  }

  .label {
    background: radial-gradient(
      farthest-corner at 50% 20px,
      var(--color-red-400) 0%,
      var(--color-red-700) 70%,
      var(--color-red-900) 100%
    );
    display: inline-block;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    border: 0.2rem solid var(--color-red-100);
    outline: 0.3rem solid var(--color-red-800);
    border-top: none;
    box-shadow:
      0 0.5rem 1rem #0006,
      0 0.6rem 1.5rem #0004;

    &:focus-visible {
      outline-offset: 8px;
      outline-color: var(--color-red-600);
    }
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

  p {
    margin: 0;
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1em;
    color: var(--color-slate-050);
  }

  a:hover {
    text-decoration: none;
  }
</style>
