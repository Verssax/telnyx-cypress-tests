import Footer from "./components/footer";
import NavBar from "./components/navBar";

class BasePage{
    constructor(){
        this.url = '/'
        this.navBar = NavBar
        this.footer=  Footer
    };    
    

    openPage () {
        cy.visit(this.url)
    };
}

export default BasePage;