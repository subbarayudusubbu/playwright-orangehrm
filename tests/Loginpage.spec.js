const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/Login");
const users=require("../testdata/users.json");



test.describe("OrangeHRM Login Tests", () => {
   


    test("Valid Login", async ({ page }) => {
       
        const login = new LoginPage(page);

        await login.open();
        await login.login(users.validLogin.username, users.validLogin.password);

       
    });

    test("Invalid Login", async ({ page }) => {
      
        const login = new LoginPage(page);

        await login.open();
        await login.login(users.invalidUser.username, users.invalidUser.password);
        console.log("Invalid login attempted");
        
    });
    test("Invalid Login Attempt 2", async ({ page }) => {
      
        const login = new LoginPage(page);

        await login.open();
        await login.login(users.validUser_invalidPassword.username, users.validUser_invalidPassword.password);
        console.log("in this use valid user name and invalid passwordsd");
        
    });
});

