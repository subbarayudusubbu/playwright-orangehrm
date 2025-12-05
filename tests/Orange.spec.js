
const { test, expect } = require('@playwright/test');

test.describe('Multiple Login Validation', () => {

  const users = [
    { username: "Admin", password: "admin123", valid: true },
    { username: "admin123", password: "admin123", valid: false },
    { username: "Admin", password: "wrongpass", valid: false },
    { username: "TestUser", password: "admin", valid: false },
    { username: "Admin", password: "admin123", valid: true },
  ];

  for (const [index, user] of users.entries()) {

    test(`Login Test #${index + 1} - ${user.username}`, async ({ page }) => {

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      await page.getByPlaceholder('Username').fill(user.username);
      await page.getByPlaceholder('Password').fill(user.password);
      await page.getByRole('button', { name: 'Login' }).click();

      //  CORRECT LOGIN
      if (user.valid) {

        // Dashboard must open
        await expect(page).toHaveURL(/dashboard\/index/);
        console.log("sucessful login");

      } 
      //  WRONG LOGIN
      else {

        // Dashboard should NOT open
        await expect(page).not.toHaveURL(/dashboard\/index/);
          await expect(page.getByText('Invalid credentials')).toBeVisible();
        console.log("failed login");
                


        
      }

    });

  }

});
