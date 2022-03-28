/// <reference types="cypress"/>

describe('api test',()=>{
   beforeEach(()=>{
     cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html');
})
   it('renders correctly',()=>{
       cy.log('hi')
           cy.intercept('GET','https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
           .as('superheroes');
           
           cy.wait('@superheroes').then((intersection) =>{
               console.log(intersection);
           })
   })
})
