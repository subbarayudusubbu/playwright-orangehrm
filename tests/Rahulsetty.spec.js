const{ test, expect } = require('@playwright/test');
const RahulLoginPage = require('../pages/Rahullogin');
const users = require('../testdata/users.json'); 
const Addcartpage = require('../pages/addcart');  




test.describe('Rahul Shetty Academy Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        const rahulLoginPage = new RahulLoginPage(page);
        await rahulLoginPage.open();  
         await rahulLoginPage.login(users.RahulValidLogin.email  , users.RahulValidLogin.password);       
        
        // Add assertions here to verify successful login
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    });
    test('zaracoat', async ({ page }) => {
        // Test logic for zaracoat  
        const zaracoat = new Addcartpage(page);
        await zaracoat.addtocart();  
      

       

        
    });   

   
});