describe('Factorial Calculator Page', () => {
  beforeEach(() => {
    cy.visit('https://qainterview.pythonanywhere.com');
  });

  it('should load the app with correct title and links', () => {
    cy.get('h1').should('contain', 'factorial');
    cy.get('a').should('have.length', 3);
  });

  it('should calculate the factorial of 5 correctly', () => {
    cy.get('input').type('5');
    cy.get('button').contains('Calculate!').click();
    cy.get('#resultDiv').should('contain', 'The factorial of 5 is: 120');
  });

  it('should show error for non-numeric input', () => {
    cy.get('input').type('abc');
    cy.get('button').contains('Calculate!').click();
    cy.get('#resultDiv').should('contain', 'Please enter an integer');
  });

  it('should calculate factorial for large numbers', () => {
    cy.get('input').type('20');
    cy.get('button').contains('Calculate!').click();
    cy.get('#resultDiv').should('contain', 'The factorial of 20 is: 2432902008176640000');
  });
  
  it('should not allow negative numbers', () => {
    cy.get('input').type('-5');
    cy.get('button').contains('Calculate!').click();
    cy.get('#resultDiv').should('contain', 'Please enter a positive integer');
  });

  it('should redirect to Terms & Conditions page', () => {
    cy.get('a').contains('Terms and Conditions').click();
    cy.url().should('include', '/terms');
  });

  it('should redirect to Privacy Policy page', () => {
    cy.get('a').contains('Privacy').click();
    cy.url().should('include', '/privacy');
  });
});
