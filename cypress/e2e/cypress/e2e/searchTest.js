/// <reference types="Cypress" />

describe('DelekHomes project', () => {
  it('Featured Listing - Search', () => {
      // Test step - open URL
      cy.visit("https://dev.delekhomes.com/");
      //cy.get('#r1').click();
      //Because our "Search" is covered by another elements, so we need to force to type/click
      // We need \\ before : and after r1 \\ 
      cy.get('[id="\\:r1\\:"]').type('house', { force: true });
      //clicking on Bedrooms and selecting how many bedrooms
      
      //Static dropdowns: (use Select if in tag is Select, you can use select(''))
      //1) Pass name or value of dropdown - for contains
      //2) Verify if it was selected '4+': using should('have. ',')
      cy.get('[id="\\:r2\\:"]').click();
      cy.contains('4+').click().should('have.text', '4+');

      //Lets select "State":
      cy.get('[id="\\:r3\\:"]').click();
      cy.contains('Colorado').click().should('have.text', 'Colorado');

      //Lets click on "City":
      cy.get('[id="\\:r4\\:"]').type('Denver')

      //Click on "Start search"
      cy.get('button').eq(0).click();

      
      
      });
   });