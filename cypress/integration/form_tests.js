describe("testing form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/order")
    })
    it("form test", () => {
        cy.get("[data-cy=name]").type("Justin").should("have.value","Justin" );  
        cy.get("[data-cy=size]").select("2").should("have.value","2");   
        cy.get("[data-cy=pepperoni]").check().should("be.checked");
        cy.get("[data-cy=bacon]").check().should("be.checked");
        cy.get("[data-cy=si]").type("Leave at door").should("have.value","Leave at door"); 
        
        cy.get("[data-cy=order]").click(); 
    })
})