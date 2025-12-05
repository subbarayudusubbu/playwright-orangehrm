const { test, expect } = require("@playwright/test");
const Login = require("../pages/Login");
const users = require("../testdata/users.json");
const Adminpage = require("../pages/admin");
const pimpage = require("../pages/pim");

test.describe("OrangeHRM Login Tests", () => {

    test.beforeEach(async ({ page }) => {
        const login = new Login(page);
        await login.open();
        await login.login(users.validLogin.username, users.validLogin.password);
        await page.waitForURL("**/dashboard/index");
    });

    test("Valid Login", async ({ page }) => {
        await page.getByRole("heading", { name: "Dashboard" }).waitFor();
    });

    test("Add Admin Tab", async ({ page }) => {
        const adminpage = new Adminpage(page);

        await adminpage.clickonadminTab();
        await adminpage.clickonaddadminBtn();

    });
    test("Add PIM Tab", async ({ page }) => {
        const pim = new pimpage(page);

        await pim.clickonpimTab();
        await pim.clickonaddpimBtn();
        await pim.addpimdetails(users.emp.firstname,users.emp.middlename,users.emp.lastname,users.emp.empid);
       
          await page.waitForURL("**/pim/viewPersonalDetails/empNumber/*");
    });

    
});