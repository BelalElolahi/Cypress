/// <reference types="cypress" />
import paymentPageSelectors from '../pageObject/paymentPageSelectors'

describe('Payment capture checkout test', () => {
    it('verify PayPal button work successfully', () => {
        cy.visit('http://payments-ui.cdsshopqa.cdsglobalapps.net/demo/checkout');

        /*   cy.get('.aut-iframe')
             .its('0.contentDocument.body')
             .should('not.be.empty')
             .find().click() */

        /* cy.get('.aut-iframe').then(function($iframe){
            const iframeContent = $iframe.contents().find('body')
            cy.wrap(iframeContent).find(paymentPageSelectors.startCheckoutButton)
            .should('exist')
        }) */
    
        //cy.frameLoaded('.aut-iframe')
        /* cy.iframe('.aut-iframe')
            .find(paymentPageSelectors.startCheckoutButton)
            .should('be.visible')
            .click() */

        //cy.iframe('[class="aut-iframe"]').as('iframe')     
    });
});

