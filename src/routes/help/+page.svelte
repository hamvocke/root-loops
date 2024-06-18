<script lang="ts">
  import Header from "../Header.svelte";
  import { prepare } from "$lib/cereals";
  import { defaultRecipe } from "$lib/ingredients";
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

  <a href="/" class="back-link">&lt; Go back</a>
  <div class="info glass-box">
    <h2 class="large">Your own terminal color scheme, as simple as making a bowl of cereal</h2>
    <p class="lead">
      Root Loops helps you generate tasty color schemes that you can use for terminal emulators,
      syntax highlighting, or whatever else you fancy. Dark mode, light mode, vibrant or pale, you
      decide.
    </p>
    <h2>What is Root Loops?</h2>
    <p>
      Root Loops is a terminal color scheme generator. It allows you to generate color schemes by
      mixing a few ingredients. The generated color schemes are <a
        href="https://en.wikipedia.org/wiki/ANSI_escape_code">ANSI color code</a
      > compliant and can be used in most terminal emulators and syntax highlighting engines.
    </p>

    <p>
      Root Loops generates a color scheme resembling <a
        href="https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit">4-bit color scheme</a
      >
      conventions, consisting of 16 colors in total. You get <strong>4 base colors</strong> (<em
        >black</em
      >,
      <em>white</em>, <em>bright black</em> and <em>bright white</em>) and
      <strong>12 accent colors</strong>
      (<em>red</em>, <em>green</em>, <em>yellow</em>, <em>blue</em>, <em>magenta</em>,
      <em>cyan</em>, and their respective <em>bright</em> versions). You don't have to use the
      <em>bright</em> versions of the color scheme if you don't want to or your terminal emulator doesn't
      support this, leaving you with a 3-bit color scheme.
    </p>

    <h2>Why should I use Root Loops?</h2>
    <p>
      Designing a terminal color scheme sounds easier than it is. You only need a few base colors
      and a few accents, but chosing your colors so that they have a consistent tone, good
      legibility, reasonable contrast, semantic colors, and most importantly ✨the right vibe ✨ can
      be tedious. Root Loops tries to make it fun and easy to generate color schemes by giving you a
      few ingredients you can play with until you found something you like.
    </p>

    <p>
      Under the hood, Root Loops uses the <a href="https://bottosson.github.io/posts/colorpicker/"
        >Okhsl</a
      >
      color space which is based on the increasingly popular
      <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">Oklch</a> color space
      but a little easier to use in tools like Root Loops. Using this color space makes it easy to generate
      a consistent color palette that respects how your eyes perceive the hue and lightness of colors.
    </p>

    <p>
      This color model isn't perfect but it generates better results than a more tried-and-trusted
      models like <a href="https://en.wikipedia.org/wiki/HSL_and_HSV">HSL</a> which often leads to a
      color palette that looks like it's got uneven saturation. The result is a more harmonic, even,
      and maybe even accessible color palette.
    </p>

    <h2>How does it work?</h2>
    <p>
      At the top of the page you find a bunch of ingredients you can mix to create a recipe for your
      bowl of cereal. Root loops will use these ingredients to generate a color scheme consisting of
      16 colors - 4 base colors and 12 accent colors.
    </p>

    <p>Each of the ingredients drives a different aspect of the resulting color scheme:</p>
    <ul>
      <li>
        <strong>Sugar</strong>: Drives the lightness of your accent colors. More sugar results in
        brighter colors.
      </li>
      <li>
        <strong>Artificial Colors</strong>: Add more artificial colors to make your accent colors
        more vibrant. Do you prefer a pale and bland look and like it if your cereals taste like
        cardboard? Simply reduce the amount of artificial colors!
      </li>
      <li>
        <strong>Milk</strong>: Determines the lightness of your base colors. Use this to switch from
        a dark theme to a light theme. More milk means more brightness.
      </li>
      <li>
        <strong>Cereal Flavor</strong>: You can pick from one of three flavors: <em>Classic</em>,
        <em>Fruity</em>, and <em>Unicorn</em>. Each flavor shifts the hue of all accent colors a bit
        while still ensuring consistent hue distance and color semantics among all accent colors.
      </li>
      <li>
        <strong>Fruit</strong>: Feeling fancy? Add some fresh fruit to your bowl of cereal to tweak
        the overall hue of your base colors. Paired with the "Sogginess" option this will lead to
        nice and colorful base tones.
      </li>
      <li>
        <strong>Sogginess</strong>: Let your bowl sit for a while and you'll see how your milk turns
        more vibrant. The "sogginess" ingredient determines how vibrant the color of your milk is
        going to be. Based on the fruit you chose the sogginess is going to add a more or less
        intense hue of that fruit's color to your base colors.
      </li>
    </ul>

    <h2>How do I use the color scheme in my terminal emulator?</h2>
    <p>
      You can click on a cereal to copy its color value to your clipboard. Depending on the terminal
      emulator you use, you can then paste this color into a configuration file or pass it to the
      graphical user interface of your terminal emulator to define your new color scheme. The colors
      should map to the default ANSI colors your terminal emulator is asking for.
    </p>

    <h2>Can I use these colors for anything else?</h2>
    <p>
      You can use the generated color schemes for whatever you like. You could use them to define a
      custom code highlighting color scheme for your blog, use them in your next design, or whatever
      else you fancy.
    </p>

    <p>
      If you ended up finding this tool useful, I'd love to hear from you. You find my contact
      details on <a href="https://hamvocke.com">my website</a>
    </p>

    <h2>Why do some of the recipes generate ugly-ass color schemes?</h2>
    <p>
      Well... it's just like when you make yourself a bowl of cereal: It's hard to screw this up,
      but if you really insist you can create a bowl of cereal that's hardly edible. That's on you,
      my friend.
    </p>

    <h2>I found a bug. Where can I report it?</h2>
    <p>
      <a href="https://github.com/hamvocke/root-loops/issues">On GitHub</a>.
    </p>

    <h2>I miss a feature. Where can I request it?</h2>
    <p>
      <a href="https://github.com/hamvocke/root-loops/issues">On GitHub</a>.
    </p>

    <h2>Where can I find the source code?</h2>
    <p>
      You guessed it: <a href="https://github.com/hamvocke/root-loops">On GitHub</a>.
    </p>

    <h2>How can I learn more about what's happening behind the scenes?</h2>
    <p>
      I wrote a <a href="https://hamvocke.com/blog/lets-create-a-terminal-color-scheme/"
        >pretty elaborate blog post</a
      > explaining the things I discovered while building Root Loops. This would be your best destination.
    </p>

    <h2>What's up with all the cereal puns?</h2>
    <p>I think it's fun ¯\_(ツ)_/¯</p>
  </div>
</main>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 1rem), 90ch);
  }

  .back-link {
    margin-left: 0.5rem;
    font-weight: bold;
  }

  .info {
    padding: 1.5rem;
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
    color: var(--color-slate-700);
  }

  p + h2,
  ul + h2 {
    margin-top: 2rem;
  }

  .large {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 1.2rem;
  }
</style>
