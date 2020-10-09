const DATOFPAYMENT_DROPDOWN = '#payment-day-input'
const CONTINUE_BUTTON = '#next'

class MembershipSetupPage {
    
    static paymentDayDropdown(){
       cy.get(DATOFPAYMENT_DROPDOWN).select('1'); 
    }
    
    static clickContinueButtonb(){
        cy.get(CONTINUE_BUTTON).click();
    }
}

export default MembershipSetupPage;
