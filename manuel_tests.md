# Manual Test Results

## Test Cases and Results

1. Page Elements Verification
   - Result: PASS
   - All expected elements (text box, submit button, title, three hyperlinks, copyright message) are present.

2. Positive Integer Input
   - Result: PASS
   - Tested with inputs 0, 1, 5, 10, 20
   - All calculations were correct

3. Non-Integer Input
   - Result: PASS
   - Tested with 'abc', '3.14', '2e3'
   - Appropriate error message displayed: "Please enter an integer"

4. Negative Number Input
   - Result: FAIL
   - Expected: Error message "Please enter a positive integer"
   - Actual: The application calculates the factorial of the absolute value of the input
   - Bug report: The application should not accept negative numbers for factorial calculation

5. Large Number Input
   - Result: PASS
   - Tested with 50, 100
   - Correct results displayed without overflow issues

6. Hyperlink Functionality
   - Result: FAIL
   - Expected: Clicking on "Terms and Conditions" and "Privacy" links should redirect to respective pages
   - Actual: Links do not redirect to any page
   - Bug report: Hyperlinks for Terms and Conditions and Privacy Policy are not functional

7. Responsive Design
   - Result: PASS
   - Tested on desktop and mobile viewports
   - The application layout adjusts appropriately for different screen sizes

## Summary of Issues

1. Negative number handling: The application incorrectly processes negative numbers instead of showing an error message.
2. Non-functional hyperlinks: The Terms and Conditions and Privacy Policy links do not redirect as expected.

These issues should be addressed by the development team to improve the application's functionality and user experience.