export const javascriptSnippet = `async function transfer(fromAccount: string, toAccount: string, amount: number) {
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

export const pythonSnippet = `@activity.defn
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

export const ansiSnippet = `\u001b[0;90m┌\u001b[0m  \u001b[0;36;1mWelcome to VitePress!\u001b[0m\u001b[0m
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

export const vitestSnippet = `
> root-loops@0.0.1 test:unit
> vitest cereals.test.ts --run --color

[7m[1m[36m RUN [39m[22m[27m [36mv1.5.0[39m [90m/home/ham/dev/root-loops[39m

 [32m✓[39m src/lib/cereals.test.ts [2m ([22m[2m17 tests[22m[2m)[22m[90m 13[2mms[22m[39m

[2m Test Files [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[32m17 passed[39m[22m[90m (17)[39m
[2m   Start at [22m 10:14:09
[2m   Duration [22m 451ms[2m (transform 79ms, setup 0ms, collect 93ms, tests 13ms, environment 0ms, prepare 87ms)[22m

`;
