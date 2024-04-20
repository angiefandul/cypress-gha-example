describe('My First Test', () => {
    it('My FirstTest case!', () => {
        // Test step - open URL
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");

        // Verify if 4 items displayed
        // Assertion
        cy.wait(2000);
        cy.get(".product:visible").should("have.length", 4);

        // Parent child 
        cy.get(".products").as('productLocator')
        cy.get("@productLocator").find(".product").should("have.length", 4);

        // Add to Cart button with EQ and contains
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();

        // To search by name in products, with method "Each" in arrays
        cy.get('@productLocator').find('.product').each(($e1, index) => {
            const textVeg = $e1.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($e1).contains('ADD TO CART').click();
            }
        });

        // Log the text of the brand element
        cy.get(".brand").then(logoelement => {
            cy.log(logoelement.text());
        });

        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GreenKart').then(() => {
            // This is to print in logs
            cy.get('.brand').then(logoelement => {
                cy.log(logoelement.text());
            });
        });
    });
});