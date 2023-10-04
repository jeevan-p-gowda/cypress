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

        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo presence
        .and('exist') // logo existence

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin')

        // have.length - if locators finds multiple elements
    })

    it("explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Roshni Sharma"
        
        cy.get(".oxd-userdropdown-name").then((x)=>{
                let actName = x.text()
                // BDD assertion
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)
                // TDD assertion
                assert.equal(actName,expName)
                assert.notEqual(actName,expName)
        })
    })
})
