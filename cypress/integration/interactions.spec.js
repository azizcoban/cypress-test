/// <reference types="Cypress" />


describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    })

    it('sets the header text to the item\'s name when double clicked', () => {

            // Double clicking on the selected item
        cy.get('[data-cy = "box-1-items-list"] > :nth-child(2)')
            .dblclick()

            // Expecting that the text has changed
        cy.get('[data-cy = "box-1-selected-name"]')
            .contains('Option Two').should('be.visible')
    })

    it('displays the correct count for the number of selected checkboxes', () => {

            // Checking the box of selected item 
        cy.get('[data-cy = "box-2-checkboxes"] > :nth-child(1) input')
            .check()

            // Checking the count of the selected checkboxes
        cy.get('[data-cy = box-2-selected-count]')
            .invoke('text')
            .should('equal', '1')
    })
    
    it('displays the name of the currently selected item', () => {

            // Selecting the item the item on dropdown menu
        cy.get('[data-cy = box-3-dropdown]')
            .select('Option Three')

            // Expecting that the text has changed
        cy.get('[data-cy = box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three')
    })

    it('should display the name of the most recently hovered item', () => {
            // We are hovering on selected item with mouseover event
        cy.get('[data-cy = box-4-items-list] > :nth-child(2)')
            .trigger('mouseover')
            // Expecting text has changed 
        cy.get('[data-cy = box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two')
    })
})
