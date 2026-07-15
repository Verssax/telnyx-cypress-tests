

class NavBar {
    elements = {
        menuElements : () => cy.get('#main-menu-content').children(),
        menuProductsBtn : () => cy.get('#main-menu-content').children().contains('Products'),
        menuDropdownOpened : () => cy.get('[role="menu"]'),
        dropdownVoiceAiBtn : () => cy.get('a[href="/products/voice-ai-agents"]'),   
        mobileBurgerMenu: () => cy.get('[aria-controls="main-menu-content"]')     
    }
    
  
}

export default new NavBar;