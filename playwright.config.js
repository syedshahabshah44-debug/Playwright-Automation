import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  // Tests ko sequential (ek ke baad ek) chalane ke liye
  fullyParallel: false,
  workers: 1, // Ek waqt me sirf 1 worker chalega
  
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  
  // Timeout ko 30s se barha kar 45s kar diya hai
  timeout: 45000, 
  
  reporter: 'html',
  
  use: {
    // Headless ko false rakhein agar browser dekhna hai, warna true
    headless: false,
    
    // FIX 1: slowMo ko 1000ms se kam karke 200ms kiya hai taakay delay ki waja se timeout na ho
    launchOptions: {
      slowMo: 200, 
    },

    // FIX 2: Trace hamesha retain rahega jab bhi test fail hoga
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Projects setup */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Agar baki browsers nahi chahiye toh unhe comment kar dein
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});