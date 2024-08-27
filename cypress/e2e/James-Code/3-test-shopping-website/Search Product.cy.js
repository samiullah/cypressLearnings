describe('Assignment 2', () => {

    it('Search for Product', () => {

        cy.visit('https://automationexercise.com/')

        cy.get('.col-sm-4').first().within(()  => {
            cy.get('img[src="/static/images/home/logo.png"]').should('have.attr', 'alt', 'Website for automation practice').click()
        })

        cy.get('a[href="/products"]').click()
        cy.get('#search_product').click().type('Tshirt')
        cy.get('#submit_search').click()

        cy.get('.single-products')
            .each(($el)=> {
                cy.wrap($el).find('.productinfo p').should(($p) => {
                    const text = $p.text();
                    expect(text).to.match(/Tshirt|T-Shirt|T SHIRT/i);
                    cy.get('random').should('have.value', '2')
                });
            });





    });
})