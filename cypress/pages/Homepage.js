import {commonMethods} from "../../cypress/common/CommonMethods";

export class Homepage {
    navigateToFentyBeautySite() {
        commonMethods.visitPage('https://fentybeauty.com')
    }

}


export const homepage = new Homepage();