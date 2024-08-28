describe ('example to do', () => {

    it ('select all products' , () => {

        cy.visit('https://www.automationexercise.com/')

        cy.get('.single-products').find('p').each(($el)=> {
            if($el.text()==='Blue Top') {
                console.log($el.siblings())
                cy.wrap($el).siblings().last().click({force:true})
            }
        })
    })


    it (' select first product less than 500 Rs.' ,() => {
        cy.visit('https://www.automationexercise.com/')

            cy.get('.single-products').as('productList').contains('Rs. 400').parents('.productinfo')
                cy.contains('Add to cart').click();


        cy.get('#cartModal').contains('View Cart').click()
        cy.get('#cart_info_table').first().within( () => {
            cy.get('tbody').find('tr').eq(0).find('td').eq(3).should('contain', '1')
                .as('cardQuantity')
                .then(() => {
               cy.get('@cardQuantity').then(($cardQuantity) => {
                   cy.log($cardQuantity.text())

               })
            })
        })

    });






})