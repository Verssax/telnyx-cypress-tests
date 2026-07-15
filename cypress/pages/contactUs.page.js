import BasePage from "./base.page";
import contuctForm from "../fixtures/contactForm.json";
import { pickRandom } from "../helper/utils";

class contactUsPage extends BasePage{
    constructor() {
        super()               
        this.url = '/contact-us'   
    }

    elements = {
        contactReasonSelect : () => cy.get('#Reason_for_Contact__c'),
        firstName: () => cy.get('#FirstName'),
        lastName:() => cy.get('#LastName'),
        email:() => cy.get('#Email'),
        phone:() => cy.get('#Phone_Number_Base__c'),
        phoneCountry:() => cy.get('#Phone_Number_Extension__c'),
        companySite:() => cy.get('#Website'),
        howDidYouField: () => cy.get('#How_did_you_hear_about_Telnyx_Open__c'),
        additionalInfo: () => cy.get('#Form_Additional_Information__c'),
        primaryProd: () => cy.get('#Form_Product__c'),
        estimatedSpend: () => cy.get('#Form_Budget__c'),
        errSelectMsg: () => cy.get('#ValidMsgReason_for_Contact__c'),
        submitBtn: () => cy.contains('button[type="submit"]', 'Submit')
    }

    fillUserData(userData) {       
        this.elements.contactReasonSelect().select(contuctForm.reasons.salesInquiry)
        this.elements.phoneCountry().select(pickRandom(contuctForm.phoneCountries))
        this.elements.primaryProd().select(pickRandom(contuctForm.products))
        this.elements.estimatedSpend().select(pickRandom(contuctForm.budgets))

        this.elements.firstName().type(userData.firstName)
        this.elements.lastName().type(userData.lastName)
        this.elements.email().type(userData.email)
        this.elements.phone().type(userData.phone)
        this.elements.companySite().type(`${userData.firstName}.com`)
        this.elements.howDidYouField().type(userData.text)
        this.elements.additionalInfo().type(userData.text)        
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click()
    }

}

export default new contactUsPage;