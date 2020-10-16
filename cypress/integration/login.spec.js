context("Login Page", () => {
    it("logs in with valid credentials", () => {
        cy.viewport(360, 640)
        cy.visit("http://localhost:3000/")

        cy.contains("Entrar")
        cy.get('.sc-kLokih > :nth-child(1)').click()

        //nao possui conta?
        cy.get('h3').click()

        cy.get(':nth-child(1) > input').type("newuser@test.com")
        cy.get(':nth-child(2) > input').type("testeautomatizado")
        cy.get(':nth-child(3) > input').type("testeautomatizado")

        cy.get('.sc-dIsAE').click({timeout: 20})
        
        // cy.contains("E-Mail")
        // cy.contains("Senha")
        // cy.get(':nth-child(1) > input').type("edu@edu.com")
        // cy.get(':nth-child(2) > input').type("eduedu", {timeout: 20})

        // cy.get('.sc-jrsJCI').click({force: true})
    })
})