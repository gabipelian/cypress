import {commonMethods} from "../../cypress/common/CommonMethods";
import {checkout} from "../pages/Checkout";

describe('Checkout tests', () => {
    beforeEach(() => {
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.setOptanonAlertBoxClosedCookie();
        commonMethods.setKlFormsModal();
        commonMethods.setOptanonConsentCookie();
        commonMethods.setGlobalEWelcomeData();
    });

    it("Add to bag", () => {
        checkout.navigateToFentyBeautySite();
        checkout.login();
        checkout.addToBag();
        checkout.beginCheckout();
        checkout.fillingData();

    });
});