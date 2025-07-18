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
  <title>Changelog - Root Loops</title>
  <meta name="description" content="Terminal color schemes for cereal lovers." />
  <link rel="icon" href={faviconDataUrl(cereals)} />
</svelte:head>

<main style={cssColors}>
  <Header />

  <div class="info glass-box">
    <a href="/" class="back-link">&lt; Go back</a>
    <h2 class="large">Changelog</h2>
    <p class="lead">
      Root Loops is constantly evolving and packing new features to make it even sweeter to create
      your own, personal color schemes. If you've got a feature request or idea yourself, don't be
      shy to head over to
      <a href="https://github.com/hamvocke/root-loops">our GitHub repository</a> and open up an issue.
    </p>

    <h3>2025-07-17</h3>
    <p>
      <strong>New <code>Tabby</code> and Visual Studio Code terminal export options</strong>
    </p>
    <p>
      <a href="https://github.com/natescherer">natescherer</a> provided not just one but two new
      exports. Thanks to his work, Root Loops now supports exporting to
      <a href="https://github.com/Eugeny/tabby">Tabby</a> and Visual Studio Code's terminal. Sweet stuff!
    </p>

    <h3>2025-05-19</h3>
    <p>
      <strong>New <code>Warp</code> export option</strong>
    </p>
    <p>
      Thanks to <a href="https://github.com/osamaqarem">osamaqarem</a> we now have a flashy new
      export for all the <a href="https://www.warp.dev/">Warp</a> terminal users out there!
    </p>

    <h3>2025-03-24</h3>
    <p>
      <strong>Added treesitter highlights for <code>neovim</code></strong>
    </p>
    <p>
      The <code>neovim</code> export now includes highlight groups for <code>neovim's</code> Treesitter
      integration. This should lead to richer and more fine-grained color schemes.
    </p>

    <h3>2025-02-01</h3>
    <p>
      <strong
        >Wake up, nerds! <code>vim</code> &amp; <code>neovim</code> support just dropped!</strong
      >
    </p>
    <p>
      This is a huge one. After months of fiddling, experimenting, and learning how vim and neovim
      theming works, I finally got a first version of an exporter for <code>vim</code>
      and <code>neovim</code> out of the door. This feature has been
      <a href="https://github.com/hamvocke/root-loops/issues/58">requested</a>
      by <a href="https://github.com/Diablo-D3">Diablo-D3</a> and it's one that I've personally been
      looking for.
    </p>

    <p>
      I've been rocking this colorscheme locally for a few days now and have grown to like it. There
      are still a few things to tweak and improve (the <code>neovim</code> version is very basic and
      does not come with TreeSitter support yet, for example) but I plan to improve this over the next
      few days and weeks. If you've got any feedback or are missing specific things, don't hesitate to
      open an issue on GitHub.
    </p>
    <h3>2024-12-07</h3>
    <p><strong>New</strong></p>
    <p>
      We now finally support exporting color themes to <strong
        ><a href="https://iterm2.com/">iTerm2</a></strong
      >
      as <a href="https://github.com/hamvocke/root-loops/issues/48">requested</a>
      by <a href="https://github.com/chayes72">chayes72</a>. This one's been cooking for a while
      since iTerm2 is using a somewhat awkward XML-based configuration format and I couldn't be
      bothered to dive into it until now. With iTerm2 we now got support for exporting color themes
      in RGB format, so that should make things a little easier in case there are other exports
      relying on RGB instead of HSL or Hex notation.
    </p>

    <h3>2024-12-03</h3>
    <p><strong>Design Tweaks!</strong></p>
    <p>
      The old 'plaid' background was a little bit too much after all. I've exchanged it with a
      slightly more calm yet still vibrant procedural gradient background.
    </p>

    <h3>2024-11-25</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        We've got a brand new export for <strong
          ><a href="https://github.com/junegunn/fzf">fzf</a></strong
        >, the super handy command-line fuzzy finder.
      </li>
    </ul>

    <h3>2024-11-03</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        New export option for <strong><a href="https://zellij.dev/">Zellij</a></strong>
        as <a href="https://github.com/hamvocke/root-loops/issues/21">requested</a>
        by <a href="https://github.com/tcoopman">tcoopman</a>
      </li>
    </ul>

    <h3>2024-10-04</h3>
    <p><strong>New & Breaking Change</strong></p>
    <ul>
      <li>
        Root Loops now generates an extra 2 colors that can be used as <code>foreground</code> and
        <code>background</code>
        colors in your color schemes. This pattern deviates from the classic 4-bit color schemes but
        it utilizes capabilities that virtually every modern terminal emulator offers, giving us a richer
        color palette to work with and some more 'gray' shades to make UI elements in CLI apps look nicer.
        This changes the color generation algorithm compared to older version so if you come back to
        Root Loops and try to re-generate older recipes, you'll notice that you'll get slightly different
        shades of gray. Thanks to
        <a href="https://github.com/crshrprt">@crshrprt</a>
        for <a href="https://github.com/hamvocke/root-loops/issues/8">requesting</a> and testing this
        feature.
      </li>
    </ul>

    <h3>2024-10-05</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        There's now an export option for <strong
          ><a href="https://mitchellh.com/ghostty">ghostty</a></strong
        >
        as
        <a href="https://github.com/hamvocke/root-loops/issues/7">requested</a>
        by <a href="https://github.com/tcoopman">tcoopman</a> 👻
      </li>
      <li>
        And then there's a new export option for <strong
          ><a href="https://codeberg.org/dnkl/foot">foot</a></strong
        >, a Wayland-compatible terminal emulator
      </li>
    </ul>

    <h3>2024-10-04</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        There's a new <code>colortest</code> tab in the terminal preview, as
        <a href="https://github.com/hamvocke/root-loops/issues/9">requested</a>
        by <a href="https://github.com/crshrprt">@crshrprt</a>. This will allow you to validate your
        colors against a wider variety of backgrounds and check if it still looks good.
      </li>
    </ul>

    <h3>2024-10-03</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        JSON export includes colors in <code>hsl</code> format alongside the existing
        <code>hex</code> format
      </li>
      <li>
        Export options are now grouped by category and sorted alphabetically. This should make it
        easier to find the tools you're looking for in the growing list of export options. Also, can
        you tell that we're slowly moving beyond terminal emulators only?!
      </li>
      <li>We got a spakin' new <em>Changelog</em>. You're looking at it right now!</li>
    </ul>

    <h3>2024-10-01</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        We now offer a new export option for <a href="https://helix-editor.com">Helix</a> as
        <a href="https://github.com/hamvocke/root-loops/issues/6">requested</a>
        by <a href="https://github.com/arjpar">@arjpar</a>. This is our first export for something
        that's <strong>not</strong> a terminal emulator, and I hope there'll be many more to come 🤙
      </li>
    </ul>

    <h3>2024-09-19</h3>
    <p><strong>Improved</strong></p>
    <p>Root Loops got a major design overhaul! 💅</p>
    <ul>
      <li>
        There's a new, gorgeous plaid background. Looking just like the table cloth at your
        grandma's kitchen table. Huge "thank you" to Alex Tretina who uploaded this one to <a
          href="https://thepatternlibrary.com">thepatternlibrary.com</a
        >.
      </li>
      <li>
        All glass-like elements got a nifty overhaul. Together with the new plaid background they
        add a much richer glass effect with gradient backgrounds, better blurring, and highlights
        and shadows.
      </li>
      <li>
        The input controls for your ingredients got a few design tweaks as well, making them look a
        little more grouped and hopefully more readable.
      </li>
    </ul>

    <h3>2024-09-01</h3>
    <p><strong>New</strong></p>
    <p>DOUBLE WHAMMY!</p>
    <ul>
      <li>
        New export functionality for <a href="https://wezfurlong.org/wezterm/index.html">WezTerm</a>
      </li>
      <li>
        New export functionality for <a href="https://sw.kovidgoyal.net/kitty/">Kitty</a>
      </li>
    </ul>

    <h3>2024-08-01</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        You can now reset your current Root Loops recipe to the one you saved before (or to the
        default one if you didn't save your recipe yet). This allows you to go wild with the
        ingredients and go back to the recipe you liked before if you messed up.
      </li>
    </ul>

    <h3>2024-07-27</h3>
    <p><strong>Fixed</strong></p>
    <ul>
      <li>
        Someone shared Root Loops on Twitter (yay!) and that made me realize that the Root Loops
        link preview is broken on Twitter (booo). I fixed that so that people who still use that
        dumpster fire of a website can get nice-looking previews for Root Loops.
      </li>
    </ul>

    <h3>2024-07-26</h3>
    <p><strong>Improved</strong></p>
    <ul>
      <li>
        I added some colorful loopy circles to the page background to make the 'glass' effect of the
        UI elements stand out more.
      </li>
    </ul>

    <h3>2024-07-25</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        We've got a new "Export" widget on the page. This widget replaces the previous (quick and
        dirty) export page and should make it easier to jump back and forth between pouring yourself
        a nice bowl of root loops and exporting your colors to your favourite tools.
      </li>
    </ul>

    <h3>2024-07-15</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        New export function for <code>Xresources</code> for all you X11 window manager folks out there.
        i3wm users rejoice!
      </li>
    </ul>

    <h3>2024-07-02</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        New export function for <strong>Windows Terminal</strong>. Those poor Windows users deserve
        some fun, too.
      </li>
    </ul>

    <h3>2024-06-28</h3>
    <p><strong>New</strong></p>
    <ul>
      <li>
        You can now export your color scheme to <code>JSON</code> which hopefully is a little more convenient
        than copy/pasting colors one by one into your configuration file of choice.
      </li>
    </ul>

    <h3>2024-06-16</h3>
    <p><strong>HELLO WORLD!</strong></p>

    <p>
      After working on this on and off for about 4 months (and thinking about the concept for more
      than 4 years), this is the first release of Root Loops. Say hello and have fun!
    </p>
  </div>
</main>

<style>
  main {
    margin: auto;
    width: min(calc(100% - 1rem), 90ch);
  }

  .back-link {
    display: inline-block;
    margin-left: 0.5rem;
    margin-bottom: 2rem;
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
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    margin-top: 3.5rem;
  }

  .large {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
</style>
