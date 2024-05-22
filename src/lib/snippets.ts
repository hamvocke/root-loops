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

export const vitest = `
> root-loops@0.0.1 test:unit
> vitest cereals.test.ts --run --color

[7m[1m[36m RUN [39m[22m[27m [36mv1.5.0[39m [90m/home/ham/dev/root-loops[39m

 [32m✓[39m src/lib/cereals.test.ts [2m ([22m[2m17 tests[22m[2m)[22m[90m 13[2mms[22m[39m

[2m Test Files [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[32m17 passed[39m[22m[90m (17)[39m
[2m   Start at [22m 10:14:09
[2m   Duration [22m 451ms[2m (transform 79ms, setup 0ms, collect 93ms, tests 13ms, environment 0ms, prepare 87ms)[22m

`;

export const neofetch = `
loops@cereal-box:/home/loops$ npm run test

[?25l[?7l[0m[31m[1m            .-/+oossssoo+/-.
        \`:+ssssssssssssssssss+:\`
      -+ssssssssssssssssssyyssss+-
    .ossssssssssssssssss[37m[0m[1mdMMMNy[0m[31m[1msssso.
   /sssssssssss[37m[0m[1mhdmmNNmmyNMMMMh[0m[31m[1mssssss/
  +sssssssss[37m[0m[1mhm[0m[31m[1myd[37m[0m[1mMMMMMMMNddddy[0m[31m[1mssssssss+
 /ssssssss[37m[0m[1mhNMMM[0m[31m[1myh[37m[0m[1mhyyyyhmNMMMNh[0m[31m[1mssssssss/
.ssssssss[37m[0m[1mdMMMNh[0m[31m[1mssssssssss[37m[0m[1mhNMMMd[0m[31m[1mssssssss.
+ssss[37m[0m[1mhhhyNMMNy[0m[31m[1mssssssssssss[37m[0m[1myNMMMy[0m[31m[1msssssss+
oss[37m[0m[1myNMMMNyMMh[0m[31m[1mssssssssssssss[37m[0m[1mhmmmh[0m[31m[1mssssssso
oss[37m[0m[1myNMMMNyMMh[0m[31m[1msssssssssssssshmmmh[0m[31m[1mssssssso
+ssss[37m[0m[1mhhhyNMMNy[0m[31m[1mssssssssssss[37m[0m[1myNMMMy[0m[31m[1msssssss+
.ssssssss[37m[0m[1mdMMMNh[0m[31m[1mssssssssss[37m[0m[1mhNMMMd[0m[31m[1mssssssss.
 /ssssssss[37m[0m[1mhNMMM[0m[31m[1myh[37m[0m[1mhyyyyhdNMMMNh[0m[31m[1mssssssss/
  +sssssssss[37m[0m[1mdm[0m[31m[1myd[37m[0m[1mMMMMMMMMddddy[0m[31m[1mssssssss+
   /sssssssssss[37m[0m[1mhdmNNNNmyNMMMMh[0m[31m[1mssssss/
    .ossssssssssssssssss[37m[0m[1mdMMMNy[0m[31m[1msssso.
      -+sssssssssssssssss[37m[0m[1myyy[0m[31m[1mssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.[0m
[20A[9999999D[43C[0m[1m[31m[1mham[0m@[31m[1mhambook-2[0m
[43C[0m-------------[0m
[43C[0m[31m[1mOS[0m[0m:[0m Ubuntu 24.04 LTS x86_64[0m
[43C[0m[31m[1mHost[0m[0m:[0m XPS 13 9300[0m
[43C[0m[31m[1mKernel[0m[0m:[0m 6.8.0-31-generic[0m
[43C[0m[31m[1mUptime[0m[0m:[0m 9 days, 18 hours, 17 mins[0m
[43C[0m[31m[1mPackages[0m[0m:[0m 2880 (dpkg), 47 (nix-default), 40 (snap)[0m
[43C[0m[31m[1mShell[0m[0m:[0m zsh 5.9[0m
[43C[0m[31m[1mResolution[0m[0m:[0m 3440x1440[0m
[43C[0m[31m[1mDE[0m[0m:[0m GNOME 46.0[0m
[43C[0m[31m[1mWM[0m[0m:[0m Mutter[0m
[43C[0m[31m[1mWM Theme[0m[0m:[0m Adwaita[0m
[43C[0m[31m[1mTheme[0m[0m:[0m Yaru-red-dark [GTK2/3][0m
[43C[0m[31m[1mIcons[0m[0m:[0m Yaru-red [GTK2/3][0m
[43C[0m[31m[1mTerminal[0m[0m:[0m tmux[0m
[43C[0m[31m[1mCPU[0m[0m:[0m Intel i7-1065G7 (8) @ 3.900GHz[0m
[43C[0m[31m[1mGPU[0m[0m:[0m Intel Iris Plus Graphics G7[0m
[43C[0m[31m[1mMemory[0m[0m:[0m 9833MiB / 15573MiB[0m

[43C[30m[40m   [31m[41m   [32m[42m   [33m[43m   [34m[44m   [35m[45m   [36m[46m   [37m[47m   [m
[43C[38;5;8m[48;5;8m   [38;5;9m[48;5;9m   [38;5;10m[48;5;10m   [38;5;11m[48;5;11m   [38;5;12m[48;5;12m   [38;5;13m[48;5;13m   [38;5;14m[48;5;14m   [38;5;15m[48;5;15m   [m


[?25h[?7h
`;
