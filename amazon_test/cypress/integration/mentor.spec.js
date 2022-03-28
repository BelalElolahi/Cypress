
describe('frontendmentor', () => {
    it('test',()=>{
      cy.visit('https://www.frontendmentor.io/')
    
      cy.get('#menu > :nth-child(1) > a ').click()
      cy.get('#menu > :nth-child(1) > a')
      .invoke('attr','href')
      .then(value=>{
        cy.log(value)
        cy.url().should('include',value)
      });
    })
  
  })
