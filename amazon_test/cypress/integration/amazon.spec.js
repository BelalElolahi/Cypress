import cssSelectors from '../pageObject/amazonSelector';

describe("Ammazon test ", () => {

    beforeEach(() => {
        cy.visit('https://www.amazon.com');
    });

    it('verify the select item and add to cart work successfully', () => {
        cy.sreach(cssSelectors.searchInput, 'women bags');
        let data_asin1 = cy.getElemntAttribute(cssSelectors.firsItemSelected, 'data-asin');
        cy.selectItem(cssSelectors.firsItemSelectedLink)

        cy.get(cssSelectors.addToCartButton).should('be.visible')
        cy.get(cssSelectors.addToCartButton).click();

        cy.get(cssSelectors.cartButton).click({ force: true })
        cy.get(cssSelectors.firsItemSelected).should('have.value', `${data_asin1}`)

        cy.sreach(cssSelectors.searchInput, 'male shoes')
        let data_asin2 = cy.getElemntAttribute(cssSelectors.secondItemSelected, 'data-asin');
        cy.selectItem(cssSelectors.secondItemSelectedLink)

        cy.get(cssSelectors.addToCartButton).should('be.visible')
        cy.get(cssSelectors.addToCartButton).click();

        cy.get(cssSelectors.cartButton).click({ force: true })
        cy.get(cssSelectors.cartItemCount).should('exist')
        cy.get(cssSelectors.cartItemCount).should('have.length', 2)
    
        cy.get(cssSelectors.lastItemCart).should('exist')
        cy.get(cssSelectors.firstItemCart).should('exist')
        
        cy.get(cssSelectors.firstItemCart).should('have.value', `${data_asin1}`)
        cy.get(cssSelectors.lastItemCart).should('have.value', `${data_asin2}`) 
    });
})
