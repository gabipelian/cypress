import {commonMethods} from "../../cypress/common/CommonMethods";
import {proFiltrSoftMatteLongwearFoundation} from "../pages/ProFiltrSoftMatteLongwearFoundation";

describe('Selecting different shades', () => {
    beforeEach(() => {
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.setOptanonAlertBoxClosedCookie();
        commonMethods.setKlFormsModal();
        commonMethods.setOptanonConsentCookie();
        commonMethods.setGlobalEWelcomeData();
    });

    it("Selecting different shades", () => {
        proFiltrSoftMatteLongwearFoundation.navigateToFentyBeautySite();
        proFiltrSoftMatteLongwearFoundation.clickOnShop();
        proFiltrSoftMatteLongwearFoundation.clickOnFoundation();
        proFiltrSoftMatteLongwearFoundation.clickOnShade100();
        proFiltrSoftMatteLongwearFoundation.clickOnShadeDropdown();
        proFiltrSoftMatteLongwearFoundation.clickOnRangeDropdown();



    });
});
