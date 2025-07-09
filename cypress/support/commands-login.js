/// <reference types="Cypress" />

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('.icon-user-unfollow').parents('a[title="Login"]').click()
    cy.get('#username').type(username)
    if (typeof password === 'string' && password.length > 0) {
        cy.get('#password').type(password);
    }
    cy.get('.woocommerce-form > .button').click()
});