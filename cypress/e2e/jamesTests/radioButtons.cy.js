describe('Radio Buttons Testing', () => {

    it('select Automation radio button', () => {

        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get(".Automation").as('autRadio').check()
            cy.get('@autRadio').should('be.checked')

        cy.get(".Automation").uncheck().should('not.be.checked').and('have.value','Automation')
        cy.get('input[type="checkbox"]').check()







    });
})