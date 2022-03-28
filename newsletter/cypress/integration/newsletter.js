/// <reference types="cypress" />
import 'cypress-wait-until';
import homeSelectors from '../pageObject/homeSelectors';
import signUpResponseData from '../fixtures/signUpResponseData';

describe('newsletter', () => {
  beforeEach(() => {
    cy.visit('https://jam.kubefeature.hearstapps.net/test-pages/inline-newsletter')
  });

  it('verify the templates ID be set in the cooke', () => {
    cy.getShadowElement(homeSelectors.textInput).type('test@gmial.com{enter}');
    cy.waitUntil(() => cy.getCookie('journeyHidden').then(cookie => Boolean(cookie && cookie.value)));
    cy.getCookie('journeyHidden').then((cookie) => {
      const cookieObj = JSON.parse(cookie.value);
      expect(cookieObj['test-inline-newsletter']).to.be.a('Number');
      expect(cookieObj).to.have.key("test-inline-newsletter");
    });
  });

  it('verify the text was changed after enter a valid email', () => {
    cy.get(homeSelectors.shadowRoot)
      .shadow()
      .find(homeSelectors.textContainer)
      .find(homeSelectors.changedText)
      .then(item => {
        cy.get(homeSelectors.shadowRoot)
          .shadow()
          .find(homeSelectors.textInput)
          .type('test@gmial.com');
        cy.get(homeSelectors.shadowRoot)
          .shadow()
          .find(homeSelectors.submitButton)
          .click();
        cy.get(homeSelectors.shadowRoot)
          .shadow()
          .find(homeSelectors.changedText).then(item2 => {
            expect(item2.text()).not.be.eq(item.text());
          });
      });
  });

  it('verify the inline template display', () => {
    cy.getShadowElement(homeSelectors.textContainer)
      .scrollIntoView().should('be.visible');
  });

  it('verify the inline newsletters have a text inline newsletter ', () => {
    cy.getShadowElement(homeSelectors.textContainer).find(homeSelectors.changedText).scrollIntoView()
      .then(item => {
        expect(item.text()).to.be.eq(' Test inline newsletter ');
      });
  });

  it('verify the error message display', () => {
    cy.getShadowElement(homeSelectors.textInput).type('tasdt@gl.c{enter}');
    cy.getShadowElement(homeSelectors.errorMessageElement)
    .should('be.visible').and('have.text','Please enter a valid email address');
  });

  it('verify the request header has correct data', () => {
    cy.getShadowElement(homeSelectors.textInput).type('test@gmail.com{enter}');

    cy.intercept('POST', 'https://preferencecenter-stage.hearstmags.com/api/preference/signup').as('data-spy');
    cy.wait('@data-spy').then(intercept => {
      const res = intercept.request.body;
      expect(res).to.deep.equal(signUpResponseData);
    });
  });
});
