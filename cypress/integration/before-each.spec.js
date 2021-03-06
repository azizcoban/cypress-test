/// <reference types="Cypress" />


describe('Text box with max characters', () => {

        // We don't need to visit a url or create alias for each test thanks to beforeEach() method.
    beforeEach(() => {

        // We added our base URL to the cypress.json file.
        cy.visit('/example-3')

        //We created an alias of an element
        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan')

        //We created an alias of an input element
        cy.get('[data-cy = "input-last-name"]')
            .as('charInput')
    })

    it('displays the approproite remaining characters count', () => {

        // By default we can write 15 letters in input area - we used alias to get the element
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15')

            //We are typing "hello" which has 5 letters - we used alias to get the element
        cy.get('@charInput').type('hello');

            //Finally we are expecting to see 10 letters left to write - we used alias to get the element
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10')

        cy.get('@charInput').type(' my friend')

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0')

    })

    it('prevents the user from typing more characters once max is exceeded', () => {
            
            // We are writing a phrase which has more than 15 letters - we used unique attr to get the element
        cy.get('@charInput').type('hello I am writing cypress test');

            // We are expecting to see just first 15 letters of that phrase - we used unique attr to get the element
        cy.get('@charInput')
            .should('have.attr', 'value', 'hello I am writ')
    })
})