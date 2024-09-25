# Factorial Calculator - Cypress Automated Testing

This repository contains automated tests for the [Factorial Calculator](https://qainterview.pythonanywhere.com) using Cypress.

## Project Overview

The factorial calculator is a simple web application that allows users to input a number and calculate its factorial. This test suite automates the testing of its key functionality, handling both valid and invalid inputs, and verifying page redirection for Terms and Conditions and Privacy Policy links.

## Deliverables

1. **Automated Tests**: Written in Cypress to check for various edge cases, including:
   - Correct factorial calculation for positive integers.
   - Handling invalid inputs such as negative numbers and non-numeric values.
   - Proper redirection of Terms & Conditions and Privacy links.
   
2. **Manual Test Report**: Included for areas not covered by automation.

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [Cypress](https://www.cypress.io/) installed as a dependency (handled in step 3).

### Steps to Set Up the Project

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/factorial-calculator-tests.git
   ```

2. Navigate to the project directory:
   ```bash
   cd factorial-calculator-tests
   ```

3. Install Cypress:
   ```bash  
   npm install cypress --save-dev
   ```

4. Run Cypress:
   ```bash
   npx cypress open 
   ```

5. Run Cypress Tests:
   ```bash
   npx cypress run
   ```

## Test Suite Overview

The test suite covers the following scenarios:
- Page load verification
- Correct factorial calculation
- Error handling for non-numeric input
- Large number factorial calculation
- Negative number input handling
- Redirect functionality for Terms & Conditions and Privacy Policy links

## Known Issues

1. The application currently fails to handle negative numbers correctly.
2. The redirect functionality for Terms & Conditions and Privacy Policy links is not working as expected.

Please refer to the `manual_tests.md` file for more detailed information on manual testing results and bug reports.