import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import ChooseMembershipPage from "../../pages/Club-Pilates/packageSelectionPage";
import PersonalDetailsPage from "../../pages/Club-Pilates/personalDetailsPage";
import MembershipSetupPage from "../../pages/Club-Pilates/membershipSetupPage";
import AddPaymentMethodPage from "../../pages/Club-Pilates/addPaymentmethodPage";
import ValidateSuccessPage from "../../pages/Club-Pilates/success-page";

Given ('I choose the required package from choose membership page', () => {
    ChooseMembershipPage.visit();
    ChooseMembershipPage.selectPackage();    
})

And ('I fill in all the member details in personal details page', () => {
    PersonalDetailsPage.inputEmail();
    PersonalDetailsPage.inputPassword();
    PersonalDetailsPage.inputRepeatPassword();
    PersonalDetailsPage.inputLastName();
    PersonalDetailsPage.inputFirstName();
    PersonalDetailsPage.inputLastNameKana();
    PersonalDetailsPage.inputFirstNameKana();
    PersonalDetailsPage.inputDobYear();
    PersonalDetailsPage.inputDobMonth();
    PersonalDetailsPage.inputDobDate();
    PersonalDetailsPage.selectGender();
    PersonalDetailsPage.inputPhoneNumber();
    PersonalDetailsPage.inputPostCode();
    PersonalDetailsPage.selectPrefecture();
    PersonalDetailsPage.inputCityTown();
    PersonalDetailsPage.inputChomeAddress();
    PersonalDetailsPage.inputBuildingNameandRoomNumber();
    // PersonalDetailsPage.inputAddress1();
    // PersonalDetailsPage.inputCity();
    // PersonalDetailsPage.inputProvince();
    // PersonalDetailsPage.inputZipCode();
    PersonalDetailsPage.selectHowYouHearAbtUs();
    PersonalDetailsPage.checkMarketing();
    PersonalDetailsPage.checkTermsAndConditions();
    PersonalDetailsPage.clickContinueButtona();
})

And ('I choose date of payment in membership setup page', () => {
    MembershipSetupPage.paymentDayDropdown();
    MembershipSetupPage.clickContinueButtonb();
})

when ('I fill in payment details in payment method page and press Save', () => {
    AddPaymentMethodPage.fillBankDetailsIframe();

})

Then ('I will be presented congratulations page', () => {
    ValidateSuccessPage.loginToMemberAreaButton();
})  