//Create your account section
const EMAIL_FIELD = '#email-input'
const PASSWORD_FIELD = '#password-input'
const REPEATPASSWORD_FIELD = '#repeat-password-input'

//Your details section
const LASTNAME_FIELD = '#last-name-input'
const FIRSTNAME_FIELD = '#first-name-input'
const LASTNAME_KANA_FIELD = '#last-name-phonetic-input-jp'
const FIRSTNAME_KANA_FIELD = '#first-name-phonetic-input-jp'
const DOBYEAR_FIELD = '#date-of-birth-yyyy-input'
const DOBMONTH_FIELD = '#date-of-birth-mm-input'
const DOBDATE_FIELD = '#date-of-birth-dd-input'
const GENDERMALE_RADIOBUTTON = '#male'
//const GENDERFEMALE_RADIOBUTTON = '#female'
const PHONENUMBER_FIELD = '#phone-input'

//Address section
const POSTCODE_FIELD = '#postcode-input'
const PREFECTURE_DROPDOWN = '#county-input'
// const ADDRESS1_FIELD = '#address1-input'
const CITYTOWN_FIELD = '#town-input'
// const PROVINCE_DROPDOWN = '#county-input'
// const ZIPCODE_FIELD = '#postcode-input'
const CHOMEADDRESS_FIELD = '#address1-input'
const BUILDINGNAMEANDROOMNUMBER_FIELD = '#address2-input'

//How did you hear about us field
const HOWDIDYOUHEARFIELD_DROPDOWN = '#recommendation-input'

//Marketing and T&C's radio options
const MARKETING_RADIOBUTTON = '#marketing-input'
const TERMSANDCONDITIONS_RADIOBUTTON = '#terms-and-conditions-checkbox'

//Continue button
const CONTINUE_BUTTON = '#next'

class PersonalDetailsPage {

    static inputEmail(){
        cy.get(EMAIL_FIELD).should('be.visible').should('be.enabled').type("nuxipisse-9182@yopmail.com", {delay:70});
        cy.wait(1000);
    }

    static inputPassword(){
        //cy.wait(1000);
        //cy.get(PASSWORD_FIELD).click();
        cy.get(PASSWORD_FIELD).clear().type('test12', {delay:70});
        cy.get(PASSWORD_FIELD).should('have.value', 'test12');
    }

    static inputRepeatPassword(){
        //cy.wait(1000);
        cy.get(REPEATPASSWORD_FIELD).should('be.visible').should('be.enabled').type("test12");
        cy.get(REPEATPASSWORD_FIELD).should('have.value', 'test12');
    }

    static inputLastName(){
        cy.get(LASTNAME_FIELD).should('be.visible').should('be.enabled').type("pavantest");
    }

    static inputFirstName(){
        cy.get(FIRSTNAME_FIELD).should('be.visible').should('be.enabled').type("test123");
    }

    static inputLastNameKana(){
        cy.get(LASTNAME_KANA_FIELD).should('be.visible').should('be.enabled').type("ヤマカワ");
    }

    static inputFirstNameKana(){
        cy.get(FIRSTNAME_KANA_FIELD).should('be.visible').should('be.enabled').type("ユカコ");
    }

    static inputDobYear(){
        cy.get(DOBYEAR_FIELD).should('be.visible').should('be.enabled').type("1960");
    }

    static inputDobMonth(){
        cy.get(DOBMONTH_FIELD).should('be.visible').should('be.enabled').type("05");
    }

    static inputDobDate(){
        cy.get(DOBDATE_FIELD).should('be.visible').should('be.enabled').type("21");
    }

    static selectGender(){
        cy.get(GENDERMALE_RADIOBUTTON).check('male').should('be.checked');
    }

    static inputPhoneNumber(){
        cy.get(PHONENUMBER_FIELD).should('be.visible').should('be.enabled').type("07000000000");
    }
    
    // static inputAddress1(){
    //     cy.get(ADDRESS1_FIELD).should('be.visible').should('be.enabled').type("Kleine Oever 11");
    // }

    // static inputCity(){
    //     cy.get(CITYTOWN_FIELD).should('be.visible').should('be.enabled').type("Meppel");
    // }

    // static inputProvince(){
    //     cy.get(PROVINCE_DROPDOWN).select('Drenthe');
    // }

    // static inputZipCode(){
    //     cy.get(ZIPCODE_FIELD).should('be.visible').should('be.enabled').type("7941BK");
    // }
    static inputPostCode(){
        cy.get(POSTCODE_FIELD).should('be.visible').should('be.enabled').type("100-0005");
    }

    static selectPrefecture(){
        cy.get(PREFECTURE_DROPDOWN).select('愛知県');
    }

    static inputCityTown(){
        cy.get(CITYTOWN_FIELD).should('be.visible').should('be.enabled').type("town");
    }

    static inputChomeAddress(){
        cy.get(CHOMEADDRESS_FIELD).should('be.visible').should('be.enabled').type("address1");
    }

    static inputBuildingNameandRoomNumber(){
        cy.get(BUILDINGNAMEANDROOMNUMBER_FIELD).should('be.visible').should('be.enabled').type("address2");
    }

    static selectHowYouHearAbtUs(){
        cy.get(HOWDIDYOUHEARFIELD_DROPDOWN).select('leaflet');
    }

    static checkMarketing(){
        cy.get(MARKETING_RADIOBUTTON).check();
    }

    static checkTermsAndConditions(){
        cy.get(TERMSANDCONDITIONS_RADIOBUTTON).check();
    }

    static clickContinueButtona(){
        cy.get(CONTINUE_BUTTON).should('not.be.enabled').click();
        cy.wait(1000);
    }
}

export default PersonalDetailsPage;

