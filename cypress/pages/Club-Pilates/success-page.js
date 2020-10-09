const LOGINTOMEMBERAREA_BUTTON = '#login'

class ValidateSuccessPage {

    static loginToMemberAreaButton(){
        cy.get(LOGINTOMEMBERAREA_BUTTON).should('be.visible');
    }
}

export default ValidateSuccessPage;