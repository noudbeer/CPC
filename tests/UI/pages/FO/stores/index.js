import FOBasePage from '@pages/FO/FObasePage';

require('module-alias/register');

/**
 * Stores page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class Stores extends FOBasePage {
  /**
   * @constructs
   * Setting up texts and selectors to use on stores page
   */
  constructor() {
    super();

    this.pageTitle = 'Stores';
  }
}

module.exports = new Stores();
