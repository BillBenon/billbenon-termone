describe("Do Math operation", () => {

    it("loads doMathOperation form page", () => {
        cy.visit("http://127.0.0.1:3000/do-math");
        cy.get('[data-cy="submit"]').click();
    });
    it("should display result after filling the form and clicking submit", () => {
        cy.get("#operand1").type("5");
        cy.get("#operand2").type("6");
        cy.get("#operation").type("+");
        cy.get(".submit-btn").click();
    })

})

describe("Calculator form should have all this", () => {
    beforeEach("load form that displays operand1, operand2, and operation inputs", () => {
        cy.visit("http://127.0.0.1:5173/do-math");

    })
    it("Check number of inputs", () => {
        cy.get("form>div").should('have.length', '3');
    })

})