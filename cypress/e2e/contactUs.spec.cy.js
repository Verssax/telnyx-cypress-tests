import generateUser from "../helper/userGenerator";
import contuctUsPage from "../pages/contactUs.page";


describe('test',() => {
        beforeEach(() =>{
            contuctUsPage.openPage()            
        });    
    
    it('Submit empty form shows validation error', ()=>{        
        contuctUsPage.clickSubmitBtn()
        cy.url().should('include', 'contact-us')
        contuctUsPage.elements.errSelectMsg().should('be.visible')
    })

    it('Submit form with valid data submited without an error', ()=>{
        const userData = generateUser()
        contuctUsPage.fillUserData(userData)
        contuctUsPage.elements.firstName().should('have.value', userData.firstName)
        contuctUsPage.elements.lastName().should('have.value', userData.lastName)
        contuctUsPage.elements.email().should('have.value', userData.email)
        contuctUsPage.elements.phone().should('have.value', userData.phone)
        contuctUsPage.elements.additionalInfo().should('have.value', userData.text)
    });
})