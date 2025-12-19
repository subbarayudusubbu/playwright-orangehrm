class pimpage{

    constructor(page)
    {
        this.page=page;
        this.adminTab= page.getByRole('link',{name:'PIM '});
        this.addadminBtn= page.getByRole('button',{name:'Add'});

        this.empname=page.locator('//input[@placeholder="First Name"]');
        this.empmiddele=page.locator('//input[@placeholder="Middle Name"]');
        this.emplastname=page.locator('//input[@placeholder="Last Name"]');
        this.empid=page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]');
        this.empsavebtn=page.getByRole('button',{name:'Save'});
    }

    async clickonpimTab(){
        // click on pim tab
        await this.adminTab.click();
    }

    async clickonaddpimBtn(){
        // click on add button
        await this.addadminBtn.click();
    }
    async addpimdetails(empname,empmiddele,emplastname,empid){
        await this.empname.fill(empname);
        await this.empmiddele.fill(empmiddele);
        await this.emplastname.fill(emplastname);
        await this.empid.fill(empid);
        await this.empsavebtn.click();
    }
}
module.exports=pimpage;