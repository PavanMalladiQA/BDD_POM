// const BANK_FIELD = 'span[id=vb_Bank_1] > input[name=Bank_1]'
// const ACCOUNTNAME_FIELD = 'input[class=di]'
const BANKCODE_FIELD = '.ib4'
const BRANCHCODE_FIELD = '.ib3'
//const ACCOUNTTYPE_RADIOBUTTON = 'input[name="Account Type", value=1]'
const ACCOUNTNUMBER_FIELD = '.ib7'
const NAMEOFACCHOLDER_FIELD = '.di'
const SAVE_BUTTON = '.button'

class AddPaymentMethodPage {
    static fillBankDetailsIframe(){
    cy.wait(2000);
    cy.get('.w-full[name=payment-provider-post-iframe]')
    .then(function ($iframe) {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find(BANKCODE_FIELD).click().type("9900");
      //cy.wrap($body).find(ACCOUNTNAME_FIELD).type("Test");
      cy.wrap($body).find(BRANCHCODE_FIELD).type("159");
      cy.wrap($body).find(ACCOUNTNUMBER_FIELD).type("4268753");
      cy.wrap($body).find(NAMEOFACCHOLDER_FIELD).type("半角カナ");
      cy.wrap($body).find(SAVE_BUTTON).click();

    })
    
}

}
export default AddPaymentMethodPage;

    // static inputBank(){
    //     cy.get(BANK_FIELD).clear().type("1111");
    // }

    // static inputAccountName(){
    //     cy.get(ACCOUNTNAME_FIELD).should('be.visible').should('be.enabled').type("Test");
    // }

    // static inputBranchCode(){
    //     cy.get(BRANCHCODE_FIELD).should('be.visible').should('be.enabled').type("111");
    // }

    // static inputAccountNumber(){
    //     cy.get(BRANCHCODE_FIELD).should('be.visible').should('be.enabled').type("1111111");
    // }

    // static pressSaveButton(){
    //     cy.get(SAVE_BUTTON).click();
    // }
