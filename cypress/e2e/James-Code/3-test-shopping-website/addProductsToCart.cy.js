import 'cypress-real-events/support';
describe('Assignment 3', () => {

    it('Add first product to cart', () => {

        cy.visit('https://automationexercise.com/')
            cy.get('a[href="/products"]').click()

        cy.get('.single-products').first().within(()=> {
            cy.get('a[data-product-id="1"]').first()
            cy.contains('Add to cart').click()
        });

        cy.get('a[href="/view_cart"')
        cy.contains('View Cart').click()

        cy.get('.cart_quantity').should('have.value','2')

    });

    it.only('Hover over first product and add to cart' , () => {

        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/products"]').click()

        cy.get('.single-products').first().within(()=> {
            cy.get('a[data-product-id="1"]')
            cy.contains('Add to cart')
                .realHover()
                .wait(1000)
                .click()


        });
    });
});