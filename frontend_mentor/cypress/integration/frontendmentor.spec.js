/// <reference types="cypress" />
import challengesPageSelectors from '../pageObject/challengesSelectors';
import homeSelector from '../pageObject/homeSelectors';

const data = ['/challenges', '/solutions', '/resources', '/pro', '/hiring']

describe('Frontend Mentor Test', () => {
  beforeEach(() => {
    cy.visit('https://www.frontendmentor.io/')
  })

  it('verify nav bar elements have  the correct element', () => {
    cy.get(homeSelector.navElements).then((elem, indx) => {
      elem.each((indx, element) => {
        cy.getHrefValue(element).then((value) => {
          expect(value).to.be.eq(data[indx])
        })
      });
    })
  })

  it('verify all challenges appear ', () => {
    cy.get(challengesPageSelectors.challengeCards).should('exist')
    cy.get(challengesPageSelectors.challengeCards).then(homeItems => {
      cy.get(homeSelector.viewAllChallengesButton).click()
      cy.get(challengesPageSelectors.challengeCards).then(challengesItems => {
        expect(challengesItems.length).to.be.greaterThan(homeItems.length)
      })
    })
  })

  it.skip('verify all the appearing challenges are free only', () => {
    cy.get(homeSelector.challengesPage).click()
    cy.get(challengesPageSelectors.filterButton).click()
    cy.get(challengesPageSelectors.typeFreeCheckBox).check({ force: true })
   /*  cy.get(challengesPageSelectors.freeCards).each((el, indx) => {
      expect(el.text()).to.be.eq('Free')
    }) */
  })

  it('verify you redirect to the selected challenge page', () => {
    cy.get(challengesPageSelectors.selectedChallenge)
      .invoke('attr', 'href')
      .then((data) => {
        cy.get(challengesPageSelectors.selectedChallenge).click()
        cy.url().should('include', data)
      })
  })

  it('verify the hidden text is appear', () => {
    cy.get(challengesPageSelectors.selectedChallenge).click()
    cy.get(challengesPageSelectors.plusIcon).click()
    cy.get(challengesPageSelectors.hiddenText).should('be.visible')
  })
})
