import mainPage from "../pages/main.page"; 
import viewports, { MOBILE_BREAKPOINT } from "../configs/viewports.js"

describe('test',() => {
    beforeEach(() =>{
        mainPage.openPage()        
    });
   

    Object.entries(viewports).forEach(([device, { width, height }]) => {
        it(`Products dropdown menu opens and at least 1 option is visible(${device})`, () => {
        cy.viewport(width, height);

        if (width < MOBILE_BREAKPOINT){
            mainPage.navBar.elements.mobileBurgerMenu().should('be.visible')
            mainPage.openMobileBurgerMenu()
        };
        mainPage.navBar.elements.menuElements().should('have.lengthOf', 6)
        mainPage.clickProductsBtn()
        mainPage.navBar.elements.dropdownVoiceAiBtn().should('be.visible')
        });
    });

    Object.entries(viewports).forEach(([device, { width, height }]) => {
        it(`Explore the stack' navigates and expands the chosen layer (${device})` , () => {
            cy.viewport(width, height);  

            mainPage.clickExploreTheStackBtn()
            cy.url().should('include', '#full-stack-detail')

            const isMobile = width < MOBILE_BREAKPOINT
            if (isMobile){
                mainPage.elements.fullStackLayer4().should('be.visible')
                mainPage.clickLayer4(isMobile)  
                mainPage.elements.fullStackLayer4().should('have.attr', 'aria-selected', 'true') 
            } else {
                mainPage.elements.fullStackWide().should('be.visible')
                mainPage.clickLayer4(isMobile)
                mainPage.elements.layerWindowWide().should('be.visible')
            };
            
        });
    });

    it('Changing AI model updates pressed state for each available model', () => {
        const modelsList = mainPage.getModelLocatorsList()
        for (const model of modelsList) {
            mainPage.changeAiModel(model)
            model().should('have.attr', 'aria-pressed', 'true')
        }

    })

    it('successfully send a chat message to AI', () => {
        mainPage.elements.aiModelDefault().should('have.attr', 'aria-pressed', 'true')
        cy.intercept('POST', 'https://telnyx.com/api/inference').as('aiResponse')
        mainPage.sendMessageToAi(false)
        cy.wait('@aiResponse').its('response.statusCode').should('eq', 200)
        mainPage.elements.aiResponse().should('be.visible')
    });

    it('Submit an empty AI chat message shows error massage', () => {
        mainPage.elements.aiModelDefault().should('have.attr', 'aria-pressed', 'true')
        mainPage.sendMessageToAi(true)
        mainPage.elements.aiEmptyMsg().should('be.visible')
    })

    it('Speech To Text option displays 3 model options', () => {
        mainPage.clickSpeechToTextBtn()
        mainPage.elements.aiSpeechToTextBtn().should('have.attr', 'aria-selected', 'true')
        mainPage.elements.aiSTTFLux().should('be.visible')
        mainPage.elements.aiSTTNova().should('be.visible')
        mainPage.elements.aiSTTWhisper().should('be.visible')
    });

    it('Use-case panel switches from Healthcare to Ecommerce', () => {       
        mainPage.elements.useCaseHealthcarePanel().should('have.attr','role', 'tabpanel');
        mainPage.clickEcommerceUseCase();
        mainPage.elements.useCaseEcommercePanel().should('be.visible')
            .and('have.attr','role', 'tabpanel');
        mainPage.elements.useCaseHealthcareBtn().should('be.visible')
            .and('have.attr','role', 'tab');

    })

    it('Footer social icons are visible and link to correct URLs', () => {
        cy.fixture('socialLinks').then((socials) => {
            mainPage.footer.elements.facebookIcon().should('be.visible')
                .and('have.attr', 'href', socials.facebook)
            mainPage.footer.elements.twitterIcon().should('be.visible')
                .and('have.attr', 'href', socials.twitter)
            mainPage.footer.elements.linkedInIcon().should('be.visible')
                .and('have.attr', 'href', socials.linkedIn)
        })
    })



})