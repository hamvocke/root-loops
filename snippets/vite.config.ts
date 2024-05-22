/* This file is here so we can generate dummy 'vitest' output for our snippets */

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test.{js,ts}"],
  },
});
