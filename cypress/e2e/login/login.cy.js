/// <reference types="Cypress" />

describe('Testes Funcionais de Login', () => {

    let massa_login;

    before(() => {
        cy.fixture('massa-login').then((massa) => {
            massa_login = massa;
        });
    });

    //Cenário 1 - Login com sucessonpx 
    it('Validar login com sucesso', () => {
        cy.login(massa_login.username, massa_login.password)
        cy.screenshot('login/sucesso')
        cy.get('a > .hidden-xs')
            .should('have.text', massa_login.msg_sucesso)

        // Logout do usuário
        cy.get('a[href*="action=logout"]').click()
        cy.get('.icon-user-unfollow').should('be.visible')
    });

    //Cenário 2 - Login com senha inválida
    it('Validar login com senha inválida', () => {
        cy.login(massa_login.username, massa_login.invalid_password)
        cy.screenshot('login/senha-invalida')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', massa_login.msg_erro)
    });


    // Cenário 3 - Login com usuário inválido
    it('Validar login com usuário inválido', () => {
        cy.login(massa_login.invalid_username, massa_login.password)
        cy.screenshot('login/usuario-invalido')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', massa_login.msg_erro)
    });


    // Cenário 4 - Login com senha em branco
    it('Validar login com senha em branco', () => {
        cy.login(massa_login.username, massa_login.senha_em_branco)
        cy.screenshot('login/senha-em-branco')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', massa_login.msg_erro)
    });

});