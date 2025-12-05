class adminpage{

    constructor(page)
    {
        this.page=page;
        this.adminTab= page.getByRole('link',{name:'Admin'});
        this.addadminBtn= page.getByRole('button',{name:'Add'});


     
}

async clickonadminTab(){
    await this.adminTab.click();
}

async clickonaddadminBtn(){
    await this.addadminBtn.click(); 
}

  


  

}
module.exports=adminpage;