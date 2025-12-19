class paymentpage{
    constructor(page){
        this.page=page; 
        // card number field
      ;   
       this.expirymonth=page.locator("//body//app-root//select[1]");
       this.expiryyear=page.locator("//body//app-root//select[2]");
        this.cvvcode =page.locator("//body[1]/app-root[1]/app-order[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/form[1]/div[1]/div[2]/div[2]/input[1]")
       this.nameoncard=page.locator("(//input[@type='text'])[3]");
       this.countrydropdown=page.locator("//select[@style='width: 100%; height: 100%;']");

    }
    async paymentdetails(cardnumber,nameoncard,expirymonth,expiryyear,cvv){
        await this.cardnumber.fill(cardnumber);
        await this.nameoncard.fill(nameoncard);
        await this.expirymonth.fill(expirymonth);

        await this.expiryyear.fill(expiryyear);
        await this.cvv.fill(cvv);
        await this.paynowbtn.click();
    }
}
module.exports=paymentpage;


