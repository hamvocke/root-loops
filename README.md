# Root Loops

## Developing

Install dependencies via `npm install`.

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Testing

Unit tests run locally using vitest:

```bash
npm run test:unit
```

E2E tests run via Playwright. You can try to install it locally and run the tests natively:

```bash
npx playwright install --with-deps # only need to run this once
npm run test:integration

```

If that doesn't work (it doesn't work on non-LTS Ubuntu systems, for example) try running stuff in a container:

```bash
npm run test:integration-docker
```

Playwright tests will start your application automatically.
