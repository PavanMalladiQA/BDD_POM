Feature: New member signup

As a valid gym admin user
In order to signup a new gym member
I want to input member details including payment details to complete the signup process

Scenario: New member creation

Given I choose the required package from choose membership page
And I fill in all the member details in personal details page
And I choose date of payment in membership setup page
When I fill in payment details in payment method page and press Save
Then I will be presented congratulations page 