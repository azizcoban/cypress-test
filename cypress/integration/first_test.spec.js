/// <reference types="Cypress" />

describe('Heading text', () => {
    it('contains the correct title', () => {

        cy.visit('/example-1')

        cy.get('h1')
            .contains('My Awesome Web Applicationsdjf').should('be.visible')
    })
})