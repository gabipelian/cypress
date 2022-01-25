export class CommonMethods {
    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    setCookie(name, value) {
        cy.setCookie(name, value);

    }

    visitPage(url) {
        cy.visit(url);
    }

    clickOnElement(selector) {
        cy.get(selector).click({force: true});
    }

    assertUrlContainsExpectedAddress(address) {
        cy.url().should('include', address);
    }

    typeTextIntoElement(selector, text) {
        cy.get(selector).type(text, {force: true});
    }

    assertElementContainsExpectedText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text);
    }

    setOptanonAlertBoxClosedCookie() {
        cy.setCookie('OptanonAlertBoxClosed', '2021-07-27T11:16:01.169Z');
    };

    //this method sets kl_forms_modal cookie
    setKlFormsModal() {
        cy.setCookie('KL_FORMS_MODAL', "{%22disabledForms%22:{%22YvH2yu%22:{%22lastCloseTime%22:1631543135}}%2C%22viewedForms%22:{%22YvH2yu%22:2130250}}");
    };

    //this method sets optanon_consent_cookie
    setOptanonConsentCookie() {
        cy.setCookie('OptanonConsent', 'https%3A%2F%2Ffentybeauty.com%2Fcollections%2Fface-foundation');
    };

    setGlobalEWelcomeData() {
        cy.setCookie('GlobalE_Welcome_Data', "%7B%22showWelcome%22%3Afalse%7D")
    };

    clickOnDropdown(selector, value) {
        cy.get(selector).select(value);
    }

    frameLoaded() {
        cy.frameLoaded();
    }


}

export const commonMethods = new CommonMethods();