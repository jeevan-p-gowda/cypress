describe("Assertions demo", ()=>{
    it ("implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // 1. should  2. and
        // cy.url().should("include","orange")
        // cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should("contain","index")

        // cy.url().should("include","orange")
        // .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should("contain","index")

        cy.url().should("include","orange")
        .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain","index")
        .and("not.contain","aaa")
    })
})
