import {commonMethods} from "../../cypress/common/CommonMethods";

export class ProFiltrSoftMatteLongwearFoundation{
    navigateToFentyBeautySite() {
        commonMethods.visitPage('https://fentybeauty.com')
    }

    clickOnShop() {
        commonMethods.clickOnElement('#header > span > div > div.header__inner.js-header-inner.bg-black > div > div.header__nav > nav > div.header-nav__inner.header-nav__inner--main.js-nav-inner > ul > li:nth-child(1) > a')
    }

    clickOnFoundation() {
        commonMethods.clickOnElement('#main > div.collection > div > div:nth-child(4) > div > div.collection-grid-container.z2.w1 > div > div:nth-child(8) > div > a:nth-child(1) > div > div.product-card__featured')
    }

    clickOnShade100() {
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div > div > div.product-selector.align-c > div > div.product-selector__shades > button.product-selector__shades__single.o-hidden.bg-grey.fenty-color-fb0100');
        commonMethods.assertUrlContainsExpectedAddress('/products/pro-filtr-soft-matte-longwear-foundation-100');
    }

    clickOnShadeDropdown() {
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div > div > div.product-selector.align-c > div > div.dropdown-custom__container.dropdown-custom.shade-dropdown > div > div > span.dropdown-custom__arrow');
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div > div > div.product-selector.align-c > div > div.dropdown-custom__container.dropdown-custom.shade-dropdown > div.dropdown-custom__options > span:nth-child(4) > div');
        commonMethods.assertUrlContainsExpectedAddress('/products/pro-filtr-soft-matte-longwear-foundation-120');
                          }

    clickOnRangeDropdown() {
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div > div > div.product-selector.align-c > div > div:nth-child(1) > div > div > div > span.dropdown-custom__arrow');
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div > div > div.product-selector.align-c > div > div:nth-child(1) > div > div.dropdown-custom__options > span:nth-child(4) > div');
        commonMethods.clickOnElement('#shopify-section-product > div.product > div.product-hero.relative > div > div.product-hero__gallery > div > div.product-gallery__thumbs__container.has-scroll > div > div > div:nth-child(4) > div.img.fit-contain.is-loaded.pos-top > img');

                          }

}


export const proFiltrSoftMatteLongwearFoundation = new ProFiltrSoftMatteLongwearFoundation();