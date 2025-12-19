class Addcartpage{
    constructor(page){
        this.page=page;
        // zarra coart  view cart
        this.zaracoat=page.locator('//div[@class="container"]//div[1]//div[1]//div[1]//button[1]');

        // add to cart button
        this.addtocartbtn=page.locator('//button[normalize-space()="Add to Cart"]');

        // add cart on dashboard page 
        this.cartbtn=page.locator("//button[@routerlink='/dashboard/cart']");

        // buynow button on cart page
        this.checkoutbox=page.locator("//button[normalize-space()='Buy Now']");

        // place order button on checkout page
        this.placeorderbtn=page.locator("//button[normalize-space()='Place Order']");   
    }   
    async addtocart(){
        await this.zaracoat.click();
        await this.page.waitForTimeout(5000); 
        await this.addtocartbtn.click();
        await this.page.waitForTimeout(5000);


// cart dash board
        await this.cartbtn.click();
        await this.page.waitForTimeout(5000);  
        await this.checkoutbox.click();
        await this.page.waitForTimeout(5000);
        
    }       
}
module.exports=Addcartpage;