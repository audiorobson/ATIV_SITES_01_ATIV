module.exports = {
  ci: {
    collect: {
      startServerCommand:
        "pnpm --filter @ativ/web start --hostname 127.0.0.1 --port 3000",
      startServerReadyPattern: "Ready",
      url: ["http://127.0.0.1:3000/"],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
        chromeFlags: "--headless --no-sandbox --disable-gpu",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
