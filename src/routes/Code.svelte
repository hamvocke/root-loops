<script lang="ts">
  import { createCssVariablesTheme, getHighlighter } from "shiki";

  export let source = `async function transfer(fromAccount: string, toAccount: string, amount: number) {
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

  export let language = "javascript";

  const rootLoopsScheme = createCssVariablesTheme({
    name: "root-loops",
    variablePrefix: "--root-loops-",
    variableDefaults: {},
    fontStyle: true,
  });

  const highlighter = getHighlighter({
    langs: [language],
    themes: [rootLoopsScheme],
  }).then((highlighter) =>
    highlighter.codeToHtml(source, {
      lang: language,
      theme: "root-loops",
    }),
  );
</script>

{#await highlighter}
  <p>Loading...</p>
{:then html}
  {@html html}
{:catch error}
  <p>Something went wrong. {error.message}</p>
{/await}
