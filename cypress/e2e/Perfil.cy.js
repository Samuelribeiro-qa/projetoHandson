describe('Perfil', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.loginUp()
    })

    it('Meu Perfil', () => {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })
    })

    it('Meus Dados', () => {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })

        cy.contains('.btn-mobile-menu', 'Meus dados')
            .click()

        cy.get('input[name="user_datebirth"]')
            .type('28/10/2005')

        cy.get('input[name="addr_zipcode"]')
            .type('13308-075')

        cy.get('input[name="addr_number"]')
            .type('05')

        const ceps = [
            'Endereço:',
            'Bairro:',
            'Estado:',
            'Cidade:',
            'País:'
        ]

        const cep = ceps

        cep.forEach((cep)=> {
            cy.contains('label', cep)
                .parent()
                .find('input[type="text"]')
                .should('be.visible')
        })

        cy.contains('button', 'Salvar Dados')
            .click()
    })

    it('Meus Certificados', ()=> {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })

        cy.contains('.btn-mobile-menu', 'Meus certificados')
            .click()

        cy.contains('span', 'Você ainda não tem certificados emitidos em sua conta!')
            .should('be.visible')
    })

    it('Meus Pedidos', ()=> {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })

        cy.contains('.btn-mobile-menu', 'Meus pedidos')
            .click()
    })

    it('Minha Senha', ()=> {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })

        cy.contains('.btn-mobile-menu', 'Minha senha')
            .click()

        cy.contains('label', 'Seu e-mail:')
            .parent()
            .find('input')
            .should('be.visible')
            .and('have.value', 'samuelvinicius.vr@gmail.com')
    })

    it('Termos', ()=> {
        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')

        cy.get('a[data-rel="see-profile-options"]')
            .click({ multiple: true })

        cy.contains('.btn-mobile-menu', 'Termos')
            .click()
    })
})