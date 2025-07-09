/// <reference types="Cypress" />

describe('Testes Funcionais de Login', () => {

    it('Validar login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.get('.icon-user-unfollow').parents('a[title="Login"]').click()
        cy.get('#username').type('teste-bn@teste.com')
        cy.get('#password').type('testebn12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('have.text', 'Welcome teste-bn !');
    });

    after(() => {
        cy.get('a[href*="action=logout"]').click()
//        cy.get('.icon-user-unfollow').parents('a[title="Login"]').should('be.visible');
    })
});