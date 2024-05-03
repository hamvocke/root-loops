<script lang="ts">
  import { createCssVariablesTheme, getHighlighter } from "shiki";

  const code = `async function transfer(fromAccount: string, toAccount: string, amount: number) {
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

  const rootLoopsScheme = createCssVariablesTheme({
    name: "root-loops",
    variablePrefix: "--root-loops-",
    variableDefaults: {},
    fontStyle: true,
  });

  const highlighter = getHighlighter({
    langs: ["javascript"],
    themes: [rootLoopsScheme],
  }).then((highlighter) =>
    highlighter.codeToHtml(code, {
      lang: "javascript",
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
