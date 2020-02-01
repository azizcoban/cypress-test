/// <reference types="Cypress" />


describe('Text box with max characters', () => {
    it('displays the approproite remaining characters count', () => {
        cy.visit('http://localhost:3000/example-2')

            // By default we can write 15 letters in input area
        cy.get('span')
            .invoke('text')
            .should('equal', '15')

            //We are typing "hello" which has 5 letters
        cy.get('input').type('hello');

            //Finally we are expecting to see 10 letters left to write
        cy.get('span')
            .invoke('text')
            .should('equal', '10')

        cy.get('input').type(' my friend')

        cy.get('span')
            .invoke('text')
            .should('equal', '0')

    })

    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-2')
            
            // We are writing a phrase which has more than 15 letters
        cy.get('input').type('hello I am writing cypress test');
        
            // We are expecting to see just first 15 letters of that phrase
        cy.get('input')
            .should('have.attr', 'value', 'hello I am writ')
    })
})