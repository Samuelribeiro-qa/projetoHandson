describe('LoginPage', ()=> {

    beforeEach(()=> {
        cy.visit('/')
        cy.loginUp()
    })

    it('home Page only', ()=> {
        cy.log('todo')

        cy.get('.user_name')
            .should('be.visible')
            .and('have.text', 'SamuelSamuel')
    })
})