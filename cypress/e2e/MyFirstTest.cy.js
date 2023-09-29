// const cypress = require("cypress")


describe('My First Test', ()=> {
    it('verify title-positive', () => {
        cy.visit("https://google.com")
        cy.title().should('eq','Google')
    })

    it('verify title-negative test', () => {
        cy.visit("https://google.com")
        cy.title().should('eq','Gogle')
    })
})
