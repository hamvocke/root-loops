<script lang="ts">
  import Header from "../Header.svelte";
  import { prepare, defaultRecipe } from "$lib/cereals";
  import { generateCssColors } from "$lib/css";
  import { faviconDataUrl } from "$lib/favicon";

  const cereals = prepare(defaultRecipe);
  const cssColors = generateCssColors(cereals);
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
  <link rel="icon" href={faviconDataUrl(cereals)} />
</svelte:head>

<main style={cssColors}>
  <Header />

  <div class="info glass-box">
    <h2>What is Root Loops?</h2>
    <p>
      Root Loops is a terminal color scheme generator. It allows you to generate beautiful color
      schemes by mixing a few ingredients. The generated color schemes are <a
        href="https://en.wikipedia.org/wiki/ANSI_escape_code">ANSI color code</a
      > compliant and can be used in most terminal emulators and syntax highlighting engines.
    </p>

    <p>
      Root Loops generates a 4-bit color scheme consisting of 16 colors. You get 4 base colors (<em
        >black</em
      >, <em>white</em>, <em>bright black</em> and <em>bright white</em>) and 12 accent colors (<em
        >red</em
      >, <em>green</em>, <em>yellow</em>, <em>blue</em>, <em>magenta</em>, <em>cyan</em>, and their
      respective <em>bright</em> versions). You don't have to use the <em>bright</em> versions of the
      color scheme if you don't want to or your terminal emulator doesn't support this, leaving you with
      a 3-bit color scheme.
    </p>

    <h2>Why should I use Root Loops?</h2>
    <p>
      Designing a terminal color scheme merely means picking a few colors and plugging them into
      your terminal emulator. What's the big deal?
    </p>

    <p>
      Root Loops makes it easy to generate colors schemes that look great and put an emphasis on
      accessibility:
    </p>

    <ul>
      <li>
        Root Loops ensures that the generated colors are easy to distinguish and have consistent
        contrast.
      </li>
      <li>
        By using the <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl"
          >oklch color space</a
        > under the hood we use perceptual lightness, leading to better predictability when doing color
        manipulation.
      </li>
      <li>
        Root Loops respects color semantics. Red (often used for errors) will always be some kind of
        red, green (often used for success messages) will always be some kind of green.
      </li>
      <li>It's fun and just as easy as pouring yourself a bowl of cereals.</li>
    </ul>

    <h2>How does it work?</h2>
    <p>
      At the top of the page you find a bunch of ingredients you can mix to create a recipe for your
      bowl of cereals. Root loops will use these ingredients to generate a color scheme consisting
      of 16 colors - 4 base colors and 12 accent colors.
    </p>

    <p>Each of the ingredients drives a different aspect of the resulting color scheme:</p>
    <ul>
      <li>
        <strong>Milk</strong>: Determines the lightness of your base colors. Use this to switch from
        a dark theme to a light theme. More milk means more brightness.
      </li>
      <li>
        <strong>Sugar</strong>: Drives the lightness of your accent colors. More sugar results in
        brighter colors.
      </li>
      <li>
        <strong>Flavor</strong>: You can pick from one of three flavors: <em>Classic</em>,
        <em>Fruity</em>, and <em>Unicorn</em>. Each flavor shifts the hue of all accent colors a bit
        while still ensuring consistent hue distance and color semantics among all accent colors.
      </li>
      <li>
        <strong>Artificial Colors</strong>: Add more artificial colors to make your accent colors
        more vibrant. Do you prefer a pale and bland look and like it if your cereals taste like
        cardboard? Simply reduce the amount of artificial colors!
      </li>
      <li>
        <strong>Juice</strong>: If you want to tweak the overall hue of your base colors, you can
        add some extra juice to your bowl of cereals. A dash of orange juice will turn your milk
        more orange, a bit of grape juice will result in a beautiful purple.
      </li>
      <li>
        <strong>Sogginess</strong>: Let your bowl sit for a while and you'll see how your milk turns
        more vibrant. The "sogginess" ingredient determines how vibrant the color of your milk is
        going to be. If you didn't add any juice, this ingredient won't have any effect. If you
        added some juice, the sogginess is going to make the color you chose more or less vibrant.
      </li>
    </ul>

    <h2>How do I use the color scheme in my terminal emulator?</h2>
    <p>
      You can click on a cereal to copy its color value to your clipboard. Depending on the terminal
      emulator you use, you can then paste this color into a configuration file or pass it to the
      graphical user interface to define your new color scheme. The colors should map to the default
      ANSI colors your terminal emulator is asking for.
    </p>

    <h2>Why do some of the recipes generate ugly-ass color schemes?</h2>
    <p>
      Well... it's just like when you make yourself a bowl of cereals: It's hard to screw this up,
      but if you really insist you can create a bowl of cereals that's hardly edible. That's on you,
      my friend.
    </p>

    <h2>I found a bug. Where can I report it?</h2>
    <p>
      <a href="https://github.com/hamvocke/root-loops/issues">On GitHub</a>.
    </p>

    <h2>I'm missing a feature. Where can I request it?</h2>
    <p>
      <a href="https://github.com/hamvocke/root-loops/issues">On GitHub</a>.
    </p>

    <h2>Where can I find the source code?</h2>
    <p>
      You guessed it: <a href="https://github.com/hamvocke/root-loops">On GitHub</a>.
    </p>

    <h2>Who built this?</h2>
    <p><a href="https://hamvocke.com">Ham</a></p>

    <h2>What's up with all the cereal puns?</h2>
    <p>I think it's fun ¯\_(ツ)_/¯</p>
  </div>
</main>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 1rem), 90ch);
  }

  .info {
    padding: 1rem;
    margin: 2rem 0;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    color: var(--color-slate-600);
    text-shadow: 0 1px 0 var(--color-slate-050);
  }

  p + h2,
  ul + h2 {
    margin-top: 2rem;
  }
</style>
