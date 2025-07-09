/// <reference types="Cypress" />

describe('Testes Funcionais de Login', () => {

    //Cenário 1 - Login com sucesso
    it('Validar login com sucesso', () => {
        cy.login('teste-bn', 'testebn12345')
        cy.get('a > .hidden-xs')
            .should('have.text', 'Welcome teste-bn !')
            .then(() => {
                // Executado somente se should passar
                cy.get('a[href*="action=logout"]').click();
                cy.get('.icon-user-unfollow').should('be.visible');
            });
    });

    
    //Cenário 2 - Login com senha inválida
    it('Validar login com senha inválida', () => {
        cy.login('teste-bn', 'senha-invalida')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', 'Erro')
    });


    // Cenário 3 - Login com usuário inválido
    it('Validar login com usuário inválido', () => {
        cy.login('usuario-invalido', 'testebn12345')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', 'Erro')
    });


    // Cenário 4 - Login com senha em branco
    it('Validar login com senha em branco', () => {
        cy.login('teste-bn', '')
        cy.get('.woocommerce-error').should('be.visible')
            .and('contain', 'Erro')
    });
    
});