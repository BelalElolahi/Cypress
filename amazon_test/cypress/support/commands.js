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

const cypress = require("cypress");


Cypress.Commands.add('sreach', (selector, seachName) => { 
    cy.get(selector).type(seachName+'{enter}')

 });


Cypress.Commands.add('selectItem', (selectedItem) => { 
    cy.get(selectedItem).click()

 });

/**
 * @param {string} selector css selector , web element
 * @param {string} attribute  It's HTML Element 
 * @returns return the value of the selected element
 */
Cypress.Commands.add('getElemntAttribute', (selector,attribute) => { 
    let data_asin
    cy.get(selector).should("exist")
    cy.get(selector).invoke('attr', attribute).then(value=>{
        data_asin = value
    })

    return data_asin
 });

