/// <reference types="Cypress" />


describe('Text box with max characters', () => {
    it('displays the approproite remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3')

            // By default we can write 15 letters in input area - we used unique attr to get the element
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15')

            //We are typing "hello" which has 5 letters - we used unique attr to get the element
        cy.get('[data-cy = "input-last-name"]').type('hello');

            //Finally we are expecting to see 10 letters left to write - we used unique attr to get the element
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10')

        cy.get('[data-cy = "input-last-name"]').type(' my friend')

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0')

    })

    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3')
            
            // We are writing a phrase which has more than 15 letters - we used unique attr to get the element
        cy.get('[data-cy = "input-last-name"]').type('hello I am writing cypress test');

            // We are expecting to see just first 15 letters of that phrase - we used unique attr to get the element
        cy.get('[data-cy = "input-last-name"]')
            .should('have.attr', 'value', 'hello I am writ')
    })
})