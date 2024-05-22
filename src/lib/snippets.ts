export const javascript = `async function transfer(fromAccount: string, toAccount: string, amount: number) {
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

export const python = `@activity.defn
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

export const ansi = `\u001b[0;90m┌\u001b[0m  \u001b[0;36;1mWelcome to VitePress!\u001b[0m\u001b[0m
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

export const vitest = `[7m[1m[36m RUN [39m[22m[27m [36mv1.5.0[39m [90m/home/ham/dev/root-loops[39m

 [32m✓[39m src/lib/cereals.test.ts [2m ([22m[2m17 tests[22m[2m)[22m[90m 13[2mms[22m[39m

[2m Test Files [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[32m17 passed[39m[22m[90m (17)[39m
[2m   Start at [22m 10:14:09
[2m   Duration [22m 451ms[2m (transform 79ms, setup 0ms, collect 93ms, tests 13ms, environment 0ms, prepare 87ms)[22m

`;

export const screenfetch = `[0m[32mloops@cereal[0m:[0m[34m~/dev/root-loops[0m$ screenfetch
[0m[32m                               [0m
[0m[32m                 -/+:.         [0m[1;34m ham[0m[1m@[0m[0m[1;34mhambook-2[0m
[0m[32m                :++++.         [0m[1;34m OS:[0m Ubuntu 24.04 noble[0m
[0m[32m               /+++/.          [0m[1;34m Kernel:[0m x86_64 Linux 6.8.0-31-generic[0m
[0m[32m       .:-::- .+/:-\`\`.::-      [0m[1;34m Uptime:[0m 9d 20h 14m[0m
[0m[32m    .:/++++++/::::/++++++/:\`   [0m[1;34m Packages:[0m 2664[0m
[0m[33m  .:///////////////////////:\`  [0m[1;34m Shell:[0m zsh 5.9[0m
[0m[33m  ////////////////////////\`    [0m[1;34m Resolution:[0m 7280x2400[0m
[0m[1;31m -+++++++++++++++++++++++\`     [0m[1;34m DE:[0m GNOME 46.0.1[0m
[0m[1;31m /++++++++++++++++++++++/      [0m[1;34m WM:[0m Mutter[0m
[0m[31m /sssssssssssssssssssssss.     [0m[1;34m WM Theme:[0m Adwaita[0m
[0m[31m :ssssssssssssssssssssssss-    [0m[1;34m GTK Theme:[0m Yaru-red-dark [GTK2/3][0m
[0m[35m  osssssssssssssssssssssssso/\` [0m[1;34m Icon Theme:[0m Yaru-red[0m
[0m[35m  \`syyyyyyyyyyyyyyyyyyyyyyyy+\` [0m[1;34m Font:[0m Ubuntu 11[0m
[0m[34m   \`ossssssssssssssssssssss/   [0m[1;34m Disk:[0m 386G / 469G (87%)[0m
[0m[34m     :ooooooooooooooooooo+.    [0m[1;34m CPU:[0m Intel Core i7-1065G7 @ 8x 3.9GHz [59.0°C][0m
[0m[34m      \`:+oo+/:-..-:/+o+/-      [0m[1;34m GPU:[0m Intel Corporation Iris Plus Graphics G7 (rev 07)[0m
[0m[34m                               [0m[1; 34m RAM:[0m 10810MiB / 15573MiB[0m
`;
