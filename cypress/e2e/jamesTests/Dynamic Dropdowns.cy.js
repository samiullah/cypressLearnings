describe('Dropdowns' ,() => {

    it('Selecting Dynamic Dropdowns', () => {
        cy.visit('https://phptravels.net/')

        cy.get('strong.mt-2').as('selectCity').first().click();
        cy.get('.select2-search__field').first().type('IND')
        cy.get('.select2-results__option>div>strong>small').each(($el)=> {

            console.log($el.text)

            if($el.text==='Maldives') {
                cy.wrap($el).click()
            }
        });
    });

});