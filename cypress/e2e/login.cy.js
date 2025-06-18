describe('Login', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve logar com Sucesso!', () => {
        cy.get('Input[placeholder="Digite seu e-mail..."]')
            .type('samuelvinicius.vr@gmail.com')

        cy.get('Input[placeholder="Digite sua senha..."]')
            .type('@Handsoncode_administrativo2025')

        cy.contains('button', 'Entrar').click()

        cy.contains('Sucesso!')
            .should('be.visible')
    })

    it('Não deve logar com Senha incorreta', () => {
        cy.get('Input[placeholder="Digite seu e-mail..."]')
            .type('samuelvinicius.vr@gmail.com')

        cy.get('Input[placeholder="Digite sua senha..."]')
            .type('pwd123')

        cy.contains('button', 'Entrar').click()

        cy.contains('Oops!')
            .should('be.visible')

        cy.contains('Dados Inválidos.')
            .should('be.visible')
    })

    it('Não deve logar com email inválido', () => {
        cy.get('Input[placeholder="Digite seu e-mail..."]')
            .type('jorge@hi')

        cy.get('Input[placeholder="Digite sua senha..."]')
            .type('pwd123')

        cy.contains('button', 'Entrar').click()

        cy.contains('Oops!')
            .should('be.visible')
            .parent()
            .contains('E-mail Inválido!')
            .should('be.visible')

        cy.contains('button', 'ENTENDI')
            .click()

        cy.contains('label', 'E-mail')
            .parent()
            .find('p')
            .should('be.visible')
            .and('have.text', 'E-mail Inválido!')
    })

    it('Não deve logar sem preencher os campos', () => {
        cy.contains('button', 'Entrar')
            .click()

        cy.contains('Oops!')
            .should('be.visible')

        cy.contains('Informe seu e-mail!')
            .should('be.visible')

        cy.contains('button', 'ENTENDI')
            .click()

        cy.contains('label', 'E-mail')
            .parent()
            .find('p')
            .should('be.visible')
            .and('have.text', 'Informe seu e-mail!')
    })
})