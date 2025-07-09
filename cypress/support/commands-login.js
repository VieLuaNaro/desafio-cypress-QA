/// <reference types="Cypress" />

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('.icon-user-unfollow').parents('a[title="Login"]').click()
    cy.get('#username').type(username)
    // Verifica se o password é uma string e não está vazio
    if (typeof password === 'string' && password.length > 0) {
        cy.get('#password').type(password);
    }
    cy.screenshot('login/page')
    cy.get('.woocommerce-form > .button').click()
});
