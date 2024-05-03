<script lang="ts">
  import Slider from "./Slider.svelte";
  import Code from "./Code.svelte";
  import { crunch } from "$lib/colorcrunch";

  let milk = 6;
  let flavor = 5;
  let colors = 6;

  // TODO: inGamut() checks
  // TODO: watch out, the colors land in css land in 'oklch' format, too, which might have compatibility issues
  // $: cereals = crunch();
  $: cereals = crunch({ milk: milk, flavors: flavor, artificialColors: colors * 3 });
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
</script>

<svelte:head>
  <title>Root Loops</title>
  <meta name="description" content="A code & terminal color scheme for cereal lovers." />
</svelte:head>

<header>
  <h1>Root Loops</h1>
  <p class="caption">A code & terminal color scheme generator for cereal lovers.</p>
</header>

<section class="bowl">
  {#each Object.entries(cereals) as [_key, color]}
    <div class="wrapper">
      <div class="cereal" style="--color: {color}"></div>
      <span>{color}</span>
    </div>
  {/each}
</section>

<section class="samples" style={cssColors}>
  <Code source={javascriptSnippet} language="javascript" />
  <Code source={pythonSnippet} language="python" />
</section>

<section class="sliders">
  <Slider id="slider-milk" label="Milk" bind:value={milk} />

  <Slider id="slider-flavor" label="Flavor" bind:value={flavor} />

  <Slider id="slider-colors" label="Artificial Colors" bind:value={colors} />
</section>

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

  .samples {
    --my-color: red;
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
  }
</style>
