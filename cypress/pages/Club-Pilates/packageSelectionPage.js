const SELECT_BUTTON = '.mt-12 > :nth-child(1) > .border-t > div :nth-child(6)';

class ChooseMembershipPage {
   static visit(){
    cy.clearCookies();   
    cy.visit('https://signup-qa.membraws.com/clubpilatestraining/packages');
    cy.wait(2000);
   } 

   static selectPackage(){
       cy.get(SELECT_BUTTON).click();
   }
}

export default ChooseMembershipPage;