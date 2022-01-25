import {commonMethods} from "../../cypress/common/CommonMethods";

const InternationalCheckoutIframe = () => {
    return cy
        .get('#Intrnl_CO_Container')
        .its('0.contentDocument').should('exist')
}

const getInternatioanlCheckoutIframeBody = () => {
    return InternationalCheckoutIframe()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}

export class Checkout {

    navigateToFentyBeautySite() {
        commonMethods.visitPage('https://fentybeauty.com')
    }

    login() {
        commonMethods.clickOnElement('#header > span > div > div.header__inner.js-header-inner.bg-black > div > div.header__icons > ul > li.relative.header__icons__item.header__icons__item--account > div > a > svg > use');
        commonMethods.typeTextIntoElement('#input-email-login', "gabipelian@gmail.com");
        commonMethods.typeTextIntoElement('#input-password-login', "Ferdinand1971");
        commonMethods.clickOnElement('#customer_login > div.form-row.form-row--cta > button');


    }

    addToBag() {

        commonMethods.clickOnElement('#header > span > div > div.header__inner.js-header-inner.bg-black > div > div.header__nav > nav > div.header-nav__inner.header-nav__inner--main.js-nav-inner > ul > li:nth-child(1) > a');
        commonMethods.clickOnElement('#main > div.collection > div > div:nth-child(4) > div > div.collection-grid-container.z2.w1 > div > div:nth-child(2) > div > a.product-card__cta.product-card__cta--add.btn.btn--outlined.pc');
    }

    beginCheckout() {
        commonMethods.clickOnElement('#header > span > div > div.header__inner.js-header-inner.bg-black > div > div.header__icons > ul > li:nth-child(5) > button > div > span.header-cart-icon__count');
        commonMethods.clickOnElement('body > section > div.header-cart.z5.active > div.header-cart__footer.absolute > div > div:nth-child(2) > button:nth-child(2)');
    }

    fillingData() {

        // getInternatioanlCheckoutIframeBody().find('.col-sm-8 [placeholder="First Name"]', {timeout: 10000}).eq(0).type("Gabriel", {force: true});
        //getInternatioanlCheckoutIframeBody().find('#CheckoutData_BillingLastName').type("Pelian");
        getInternatioanlCheckoutIframeBody().find('#CheckoutData_Email').type("gabipelian@gmail.com");
        getInternatioanlCheckoutIframeBody().find('#CheckoutData_BillingAddress1').type("Fantanele No.38 Apt. 57");
        getInternatioanlCheckoutIframeBody().find('#BillingCity').type("Cluj-Napoca");
        getInternatioanlCheckoutIframeBody().find('#BillingZIP').type("400321");
        getInternatioanlCheckoutIframeBody().find('#CheckoutData_BillingPhone').type("+40742953666");
        getInternatioanlCheckoutIframeBody().find('#shipoptname_40027709').click();
        getInternatioanlCheckoutIframeBody().find('#cardNum').type("1234567890123456");
        getInternatioanlCheckoutIframeBody().find('#cardExpiryMonth').select(5);
        getInternatioanlCheckoutIframeBody().find('#cardExpiryYear').select(8);
        getInternatioanlCheckoutIframeBody().find('#cvdNumber').type("899");


    }


}

    export const checkout = new Checkout();