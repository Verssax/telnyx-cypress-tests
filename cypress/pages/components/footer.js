class Footer {

    elements = {
     twitterIcon : () => cy.get('#twitter').closest('a'),
     linkedInIcon :() => cy.get('#linkedin').closest('a'),
     facebookIcon :() => cy.get('#facebook').closest('a'),

    }
}
export default new Footer;