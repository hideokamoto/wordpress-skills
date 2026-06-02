import { defineConfig } from 'vitest/config';

// CircleCI's `store_test_results` reads JUnit XML from the repo-root `reports/`
// directory. Vitest's root is this `site/` package, so write one level up.
export default defineConfig({
  test: {
    reporters: ['default', 'junit'],
    outputFile: {
      junit: '../reports/junit.xml',
    },
  },
});
