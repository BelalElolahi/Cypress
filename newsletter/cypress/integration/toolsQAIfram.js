/// <reference types="cypress" />
import toolsQAPageSelectors from '../pageObject/toolsQAPageSelectors'

describe('Iframe Test', () => {
    it('verify This is a sample page text display', () => {
        cy.visit('https://demoqa.com/frames');
        cy.get(toolsQAPageSelectors.iframeElement)
            .its('0.contentDocument.body')
            .should('have.text', 'This is a sample page');
    });
});
