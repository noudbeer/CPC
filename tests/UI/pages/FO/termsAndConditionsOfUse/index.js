import FOBasePage from '@pages/FO/FObasePage';

require('module-alias/register');

/**
 * Terms and conditions of use page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class TermsAndConditionsOfUse extends FOBasePage {
  /**
   * @constructs
   * Setting up texts and selectors to use on terms and conditions of use page
   */
  constructor() {
    super();

    this.pageTitle = 'Terms and conditions of use';
  }
}

module.exports = new TermsAndConditionsOfUse();
