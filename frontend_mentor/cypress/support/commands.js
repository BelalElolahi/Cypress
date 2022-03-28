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
/**
 * @param {string} index css selector , which is a web element
 * @returns return the href attribute value of the selected element
 */
Cypress.Commands.add('getHrefValue',(selector)=>{
     cy.get(selector)
     .invoke('attr','href')
     .then((value)=>{
        return value
     });
  });
