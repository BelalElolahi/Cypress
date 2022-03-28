/// <reference types="cypress"/>

const { eq } = require("cypress/types/lodash");

describe("Ammazon test ",()=>{
     
     beforeEach(()=>{
         //Navigate to Amazon site
         cy.visit('https://www.amazon.com');
     });


     it('add item first to the cart',()=>{
  
        
      
          //get the srearch bar, enter women bags 
          cy.get('#twotabsearchtextbox').type('women bags{enter}')
           
          cy.wait(2000)
           
          // select the first item 
          cy.get('[data-asin="B08CB2J991"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
      
          // add to cart button
          cy.get('#add-to-cart-button').click();
      
          // check if the item added to the cart 

          cy.get('#sw-atc-details-single-container').should('exist');

          //get the srearch bar, enter women bags 
          cy.get('#twotabsearchtextbox').type('male shoes{enter}')
                      
          // select the seconed item 
          cy.get('[data-asin="B0728CGW7P"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()      
        
          // add to cart button
           cy.get('#add-to-cart-button').click();
      
          // check the length  items in cart 
          cy.get('.nav-cart-icon').click({force: true})
          //cy.get('').should('exist');

          // check cart has the exact add items

          //
                         
      });

      
      
})


