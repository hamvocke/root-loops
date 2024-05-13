<script lang="ts">
  import Slider from "./Slider.svelte";
  import Code from "./Code.svelte";
  import { prepare } from "$lib/cereals";
  import "@fontsource/luckiest-guy";

  let milk = 0;
  let flavor = 0;
  let colors = 6;

  // TODO: inGamut() checks
  // TODO: watch out, the colors land in css land in 'oklch' format, too, which might have compatibility issues
  $: cereals = prepare({ milkAmount: milk, flavors: flavor, artificialColors: colors });
  // TODO: check if the colors below really make sense for the respective tokens
  $: cssColors = `
--root-loops-foreground: ${cereals.white};
--root-loops-background: ${cereals.black};
--root-loops-token-constant: ${cereals.yellow};
--root-loops-token-string: ${cereals.green};
--root-loops-token-comment: ${cereals.cyan};
--root-loops-token-keyword: ${cereals.magenta};
--root-loops-token-parameter: ${cereals.red};
--root-loops-token-function: ${cereals.blue};
--root-loops-token-string-expression: ${cereals.green};
--root-loops-token-punctuation: ${cereals.red};
--root-loops-token-link: ${cereals.yellow};

--root-loops-ansi-black: ${cereals.black};
--root-loops-ansi-black-dim: ${cereals.black};
--root-loops-ansi-red: ${cereals.red};
--root-loops-ansi-red-dim: ${cereals.red};
--root-loops-ansi-green: ${cereals.green};
--root-loops-ansi-green-dim: ${cereals.green};
--root-loops-ansi-yellow: ${cereals.yellow};
--root-loops-ansi-yellow-dim: ${cereals.yellow};
--root-loops-ansi-blue: ${cereals.blue};
--root-loops-ansi-blue-dim: ${cereals.blue};
--root-loops-ansi-magenta: ${cereals.magenta};
--root-loops-ansi-magenta-dim: ${cereals.magenta};
--root-loops-ansi-cyan: ${cereals.cyan};
--root-loops-ansi-cyan-dim: ${cereals.cyan};
--root-loops-ansi-white: ${cereals.white};
--root-loops-ansi-white-dim: ${cereals.white};
--root-loops-ansi-bright-black: ${cereals.brightBlack};
--root-loops-ansi-bright-black-dim: ${cereals.brightBlack};
--root-loops-ansi-bright-red: ${cereals.brightRed};
--root-loops-ansi-bright-red-dim: ${cereals.brightRed};
--root-loops-ansi-bright-green: ${cereals.brightGreen};
--root-loops-ansi-bright-green-dim: ${cereals.brightGreen};
--root-loops-ansi-bright-yellow: ${cereals.brightYellow};
--root-loops-ansi-bright-yellow-dim: ${cereals.brightYellow};
--root-loops-ansi-bright-blue: ${cereals.brightBlue};
--root-loops-ansi-bright-blue-dim: ${cereals.brightBlue};
--root-loops-ansi-bright-magenta: ${cereals.brightMagenta};
--root-loops-ansi-bright-magenta-dim: ${cereals.brightMagenta};
--root-loops-ansi-bright-cyan: ${cereals.brightCyan};
--root-loops-ansi-bright-cyan-dim: ${cereals.brightCyan};
--root-loops-ansi-bright-white: ${cereals.brightWhite};
--root-loops-ansi-bright-white-dim: ${cereals.brightWhite};
`;

  const javascriptSnippet = `async function transfer(fromAccount: string, toAccount: string, amount: number) {
	// These are activities, not regular functions.
	// Activities may run elsewhere, and their return value
	// is automatically persisted by Temporal.
	await myActivities.withdraw(fromAccount, amount);
	try {
		await myActivities.deposit(toAccount, amount);
	} catch {
		await myActivities.deposit(fromAccount, amount);
	}
}`;
  const pythonSnippet = `@activity.defn
async def compose_greeting(input: ComposeGreetingInput) -> str:
    print(f"Invoking activity, attempt number {activity.info().attempt}")
    # Fail the first 3 attempts, succeed the 4th
    if activity.info().attempt < 4:
        raise RuntimeError("Intentional failure" )
    return f"{input.greeting}, {input.name}!"


@workflow.defn
class GreetingWorkflow:
    @workflow.run
    async def run(self, name: str) -> str:
        # By default activities will retry, backing off an initial interval and
        # then using a coefficient of 2 to increase the backoff each time after
        # for an unlimited amount of time and an unlimited number of attempts.
        # We'll keep those defaults except we'll set the maximum interval to
        # just 2 seconds.
        return await workflow.execute_activity(
            compose_greeting,
            ComposeGreetingInput("Hello", name),
            start_to_close_timeout =timedelta(seconds=10),
            retry_policy=RetryPolicy(maximum_interval=timedelta(seconds=2)),
        )`;

  const ansiSnippet = `\u001b[0;90m┌\u001b[0m  \u001b[0;36;1mWelcome to VitePress!\u001b[0m\u001b[0m
\u001b[0;90m│\u001b[0m\u001b[0m
\u001b[0;32m◇\u001b[0m  Where should VitePress initialize the config?\u001b[0m
\u001b[0;90m│\u001b[0m  \u001b[0;2m./docs\u001b[0m\u001b[0m
\u001b[0;90m│\u001b[0m\u001b[0m
\u001b[0;32m◇\u001b[0m  Site title:\u001b[0m
\u001b[0;90m│\u001b[0m  \u001b[0;2mMy Awesome Project\u001b[0m\u001b[0m
\u001b[0;90m│\u001b[0m\u001b[0m
\u001b[0;32m◇\u001b[0m  Site description:\u001b[0m
\u001b[0;90m│\u001b[0m  \u001b[0;2mA VitePress Site\u001b[0m\u001b[0m
\u001b[0;90m│\u001b[0m\u001b[0m
\u001b[0;36m◆\u001b[0m  Theme:\u001b[0m
\u001b[0;36m│\u001b[0m  \u001b[0;32m●\u001b[0m Default Theme \u001b[0;2m(Out of the box, good-looking docs)\u001b[0m\u001b[0m
\u001b[0;36m│\u001b[0m  \u001b[0;2m○\u001b[0m \u001b[0;2mDefault Theme + Customization\u001b[0m\u001b[0m
\u001b[0;36m│\u001b[0m  \u001b[0;2m○\u001b[0m \u001b[0;2mCustom Theme\u001b[0m\u001b[0m
\u001b[0;36m└\u001b[0m`;
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="A code & terminal color scheme for cereal lovers." />
</svelte:head>

<div class="colors" style={cssColors}>
  <header>
    <h1>
      R<span class="green">o</span><span class="magenta">o</span>t <br /> L<span class="cyan"
        >o</span
      ><span class="yellow">o</span>ps
    </h1>
    <p class="caption">A code & terminal color scheme generator for cereal lovers.</p>
  </header>

  <section class="bowl">
    {#each Object.entries(cereals) as [_key, color]}
      <div class="wrapper">
        <div class="cereal" style="--color: {color}"></div>
        <span>{color}</span>
        {#if !color.inGamut("srgb")}<span title="Not in srgb gamut">⚠️</span>{/if}
      </div>
    {/each}
  </section>

  <section class="sliders">
    <Slider id="slider-milk" label="Milk" min="0" max="3" bind:value={milk} />
    <Slider id="slider-flavor" label="Flavor" min="-15" max="15" bind:value={flavor} />
    <Slider id="slider-colors" label="Artificial Colors" min="0" max="10" bind:value={colors} />
  </section>

  <section class="samples">
    <Code source={javascriptSnippet} language="javascript" />
    <Code source={pythonSnippet} language="python" />
    <Code source={ansiSnippet} language="ansi" />
  </section>
</div>

<style>
  header {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 7rem;
    text-transform: uppercase;
    letter-spacing: -3px;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  .caption {
    margin-top: 0;
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
  }

  .bowl {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .cereal {
    box-sizing: border-box;
    height: clamp(3rem, 9vw, 128px);
    width: clamp(3rem, 9vw, 128px);
    border-radius: 50%;
    border: 3rem solid var(--color);
  }

  .colors {
    --root-loops-foreground: purple;
    --root-loops-background: orange;
    --root-loops-token-constant: #660000;
    --root-loops-token-string: #770000;
    --root-loops-token-comment: #880000;
    --root-loops-token-keyword: #990000;
    --root-loops-token-parameter: #aa0000;
    --root-loops-token-function: #bb0000;
    --root-loops-token-string-expression: #cc0000;
    --root-loops-token-punctuation: #dd0000;
    --root-loops-token-link: #ee0000;

    --root-loops-ansi-black: #000000;
    --root-loops-ansi-black-dim: #00000080;
    --root-loops-ansi-red: #bb0000;
    --root-loops-ansi-red-dim: #bb000080;
    --root-loops-ansi-green: #00bb00;
    --root-loops-ansi-green-dim: #00bb0080;
    --root-loops-ansi-yellow: #bbbb00;
    --root-loops-ansi-yellow-dim: #bbbb0080;
    --root-loops-ansi-blue: #0000bb;
    --root-loops-ansi-blue-dim: #0000bb80;
    --root-loops-ansi-magenta: #ff00ff;
    --root-loops-ansi-magenta-dim: #ff00ff80;
    --root-loops-ansi-cyan: #00bbbb;
    --root-loops-ansi-cyan-dim: #00bbbb80;
    --root-loops-ansi-white: #eeeeee;
    --root-loops-ansi-white-dim: #eeeeee80;
    --root-loops-ansi-bright-black: #555555;
    --root-loops-ansi-bright-black-dim: #55555580;
    --root-loops-ansi-bright-red: #ff5555;
    --root-loops-ansi-bright-red-dim: #ff555580;
    --root-loops-ansi-bright-green: #00ff00;
    --root-loops-ansi-bright-green-dim: #00ff0080;
    --root-loops-ansi-bright-yellow: #ffff55;
    --root-loops-ansi-bright-yellow-dim: #ffff5580;
    --root-loops-ansi-bright-blue: #5555ff;
    --root-loops-ansi-bright-blue-dim: #5555ff80;
    --root-loops-ansi-bright-magenta: #ff55ff;
    --root-loops-ansi-bright-magenta-dim: #ff55ff80;
    --root-loops-ansi-bright-cyan: #55ffff;
    --root-loops-ansi-bright-cyan-dim: #55ffff80;
    --root-loops-ansi-bright-white: #ffffff;
    --root-loops-ansi-bright-white-dim: #ffffff80;
  }

  h1 {
    font-family: "Luckiest Guy", system-ui;
    color: white;
    letter-spacing: 3px;
    line-height: 0.8em;
    text-shadow:
      -1px -1px 0 #444,
      0px -1px 0 #444,
      -1px 0px 0 #444,
      0px 1px 0 #444,
      1px 1px 0 #444,
      2px 2px 0 #444,
      3px 3px 0 #444,
      4px 4px 0 #ddd,
      5px 5px 0 #ddd,
      6px 6px 0 #ddd,
      7px 7px 0 #ddd,
      8px 8px 0 #ddd,
      0px 3px 10px #999a;
  }

  .green {
    color: var(--root-loops-ansi-bright-green);
  }

  .magenta {
    color: var(--root-loops-ansi-bright-magenta);
  }

  .cyan {
    color: var(--root-loops-ansi-bright-cyan);
  }

  .yellow {
    color: var(--root-loops-ansi-bright-yellow);
  }
</style>
