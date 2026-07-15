import BasePage from "./base.page";

class MainPage extends BasePage{
    elements = {
        exploreTheStackBtn : () => cy.get('[data-content="EXPLORE THE STACK"]'),
        talkToAnExpertBtn: () => cy.get('[data-content="TALK TO AN EXPERT"]'),

        fullStackWide : () => cy.get('#full-stack-detail'),
        fullStackLayer4 : () => cy.get('#fullstack-tab-1'),
        fullStackLayer4Wide: () => cy.get('[aria-label="View Layers 4–5 | Programmatic Identity & Compliance"]'),
        layerWindowWide: () => cy.get('[role="progressbar"][aria-label="Layer progress"]'),

        aiModelDefault : () => cy.contains('button', 'MiniMax M3 MXFP8'), 
        aiModelKimi : () => cy.contains('button', 'Kimi K2.5'), 
        aiModelQwen : () => cy.contains('button', 'Qwen3 235B A22B'),
        aiModelGLM : () => cy.contains('button', 'GLM 5.2'),

        aiTextInput : () => cy.get('[placeholder="Type message here"]'),
        aiSendBtn : () => cy.contains('button[type="submit"]', 'SEND MESSAGE'),
        aiResponse: () => cy.get('.bg-transparent'),
        aiEmptyMsg: () => cy.contains('Please enter a message'),

        aiSpeechToTextBtn : () => cy.contains('button[role="tab"]', 'Speech to Text'), 
        aiSTTFLux: () => cy.contains('button', 'Deepgram Flux'), 
        aiSTTNova: () => cy.contains('button', 'Deepgram Nova 3'), 
        aiSTTWhisper : () => cy.contains('button', 'Whisper Large v3 Turbo'), 

        useCaseHealthcare: () => cy.get('#healthcare'),
        useCaseHealthcarePanel: () => cy.get('#usecase-panel-healthcare'),
        useCaseHealthcareBtn : () => cy.get('#usecase-tab-healthcare'),
        useCaseEcommerceBtn: () => cy.get('#usecase-tab-ecommerce'), 
        useCaseEcommercePanel: () => cy.get('#usecase-panel-ecommerce'),

    }

    clickExploreTheStackBtn() {
        this.elements.exploreTheStackBtn().click();
    };

    clickTalkToExpert() {
        this.elements.talkToAnExpertBtn().click();
    };

    changeAiModel(AiModelLocator) {
        AiModelLocator().click()
    }

    sendMessageToAi(isEmpty) {
        if (isEmpty) {
            this.elements.aiSendBtn().click()
        } else {
            this.elements.aiTextInput().type('Hello')
            this.elements.aiSendBtn().click()
        }
    }
    
    clickProductsBtn() {
        this.navBar.elements.menuProductsBtn().click();
    }

    clickSpeechToTextBtn() {
        this.elements.aiSpeechToTextBtn().click();
    }

    clickEcommerceUseCase() {
        this.elements.useCaseEcommerceBtn().click('bottom');
    }
    clickLayer4(isMobile){
        if(isMobile){
            this.elements.fullStackLayer4().click()
        } 
        else{
            this.elements.fullStackLayer4Wide().click()
        }
    }

    openMobileBurgerMenu() {
        this.navBar.elements.mobileBurgerMenu().click()
    }

    getModelLocatorsList(){
        return [this.elements.aiModelKimi,this.elements.aiModelQwen,this.elements.aiModelGLM]
    }
    
}
export default new MainPage;