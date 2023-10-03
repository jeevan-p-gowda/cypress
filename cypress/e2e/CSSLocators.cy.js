describe('CSSLocators', ()=>{
    it("csslocators", ()=> {
        cy.visit("https://demo.nopcommerce.com/")

        cy.get("#small-searchterms").type("phone")
        // cy.get("//input[@id='small-searchterms']").type("phone") // xpath deprecated

        cy.get("button[type='submit']").click() 

        cy.get("div[class='page-title'] h1").contains("Search") // full CSS Locator
        cy.get(".page-title h1").contains("Search") // class
    })
})
