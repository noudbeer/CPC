import Zones from '@data/demo/zones';

const {faker} = require('@faker-js/faker');
const {Currencies} = require('@data/demo/currencies');

const zones = Object.values(Zones).map((zone) => zone.name);
const currencies = Object.values(Currencies).map((currency) => currency.name);

/**
 * Create new country to use on creation form on country page on BO
 * @class
 */
class CountryData {
  /**
   * Constructor for class CountryData
   * @param countryToCreate {Object} Could be used to force the value of some members
   */
  constructor(countryToCreate = {}) {
    /** @type {string} Name of the country */
    this.name = countryToCreate.name || `test${faker.address.country()}`;

    /** @type {string} Country iso code */
    this.isoCode = countryToCreate.isoCode || faker.address.countryCode();

    /** @type {string} Country call Prefix */
    this.callPrefix = countryToCreate.callPrefix;

    /** @type {string} Currency used in the country */
    this.currency = countryToCreate.currency || faker.helpers.arrayElement(currencies);

    /** @type {string} In which zone the country belongs */
    this.zone = countryToCreate.zone || faker.helpers.arrayElement(zones);

    /** @type {string} True if the country used zip codes */
    this.needZipCode = countryToCreate.needZipCode === undefined ? false : countryToCreate.needZipCode;

    /** @type {string} Format of the zip code if used */
    this.zipCodeFormat = countryToCreate.zipCodeFormat;

    /** @type {string} Status of the country */
    this.active = countryToCreate.active === undefined ? false : countryToCreate.active;

    /** @type {string} True if the country have states */
    this.containsStates = countryToCreate.containsStates === undefined ? false : countryToCreate.containsStates;

    /** @type {string} True if need identification number for the country */
    this.needIdentificationNumber = countryToCreate.needIdentificationNumber === undefined
      ? false : countryToCreate.needIdentificationNumber;

    /** @type {string} True to display tax number when located on the country */
    this.displayTaxNumber = countryToCreate.displayTaxNumber === undefined ? false : countryToCreate.displayTaxNumber;
  }
}

module.exports = CountryData;
