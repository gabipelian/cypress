import {commonMethods} from "../../cypress/common/CommonMethods";
import {homepage} from "../../cypress/pages/Homepage";


describe('Login tests', () => {
    beforeEach(() => {
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.setOptanonAlertBoxClosedCookie();
        commonMethods.setKlFormsModal();
        commonMethods.setOptanonConsentCookie();
        commonMethods.setGlobalEWelcomeData();
    });

    it("Login using invalid credentials", () => {
        homepage.navigateToFentyBeautySite();
    });
});
