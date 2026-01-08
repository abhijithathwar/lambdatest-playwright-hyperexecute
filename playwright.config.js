const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  workers: 2,
  use: {
    connectOptions: {
      wsEndpoint: `wss://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}@cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: 'Chrome',
        browserVersion: 'latest',
        platform: 'Windows 10',
        build: 'Playwright HyperExecute Build',
        name: 'LambdaTest Assignment',
        network: true,
        video: true,
        console: true,
        visual: true
      }))}`,
    },
  },
});
