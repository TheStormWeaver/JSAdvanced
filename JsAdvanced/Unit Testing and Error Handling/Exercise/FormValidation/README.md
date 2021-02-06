7.	Form Validation
You are given the task to write validation for the fields of a simple form.
HTML and JavaScript Code
You are provided a skeleton containing the necessary files for your program.
The validations should be as follows:
•	The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
•	The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers and _).
•	The inputs of the password and confirm-password field must match.
•	The email field must contain the “@” symbol and at least one "."(dot) after it.
If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the Company Number field must also be validated, if it isn’t checked the Company fieldset should have the style "display: none;" and the value of the Company Number field shouldn’t matter. 
•	The Company Number field must be a number between 1000 and 9999.
Every field with an incorrect value when the [Submit] button is pressed should have the following style applied border-color: red;, alternatively if it’s correct it should have style border: none;. If there are required fields with an incorrect value when the [Submit] button is pressed, the div with id="valid" should become hidden ("display: none;"), alternatively if all fields are correct the div should become visible.
Constraints
•	You are NOT allowed to change the HTML or CSS files provided.
Screenshots
  
 
 
Hints
•	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
•	All buttons within a <form> automatically work as submit buttons, unless their type is manually assigned to something else, in order to avoid reloading the page upon clicking the [Submit] button you can use event.preventDefault()
•	The validation for the separate fields can be done using regex.

