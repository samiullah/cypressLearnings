describe('Hidden Elements', () => {
    it('Verify Elements' , () => {
        cy.visit('http://web.simmons.edu/~grovesd/comm333/demo/navigation/simple.html')

        cy.get('ul>li').first().should('be.visible'); //some problem with the website
    });

});