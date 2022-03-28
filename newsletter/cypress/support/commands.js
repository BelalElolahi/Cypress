import homeSelectors from '../pageObject/homeSelectors';
import 'cypress-iframe';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

/**
 * @param selector String 
 * return return element within shadow dom element  
 */
 Cypress.Commands.add('getShadowElement',(selector) => { 
   return cy.get(homeSelectors.shadowRoot)
    .shadow().find(selector);
}) ;