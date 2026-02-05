import { defineConfig, devices } from "playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  ...(process.env.CI ? { workers: 1 } : {}),

  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});