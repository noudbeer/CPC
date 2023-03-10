import StoreData from '@data/faker/store';

export default {
  first: new StoreData({
    id: 1,
    name: 'Dade County',
    address1: '3030 SW 8th St Miami',
    address2: '',
    postcode: '33135',
    city: 'Miami',
    country: 'United States',
    state: 'Florida',
    phone: '',
    fax: '',
    status: true,
  }),
  second: new StoreData({
    id: 2,
    name: 'E Fort Lauderdale',
    address1: '1000 Northeast 4th Ave Fort Lauderdale',
    address2: '',
    postcode: ' 33304',
    city: 'Miami',
    country: 'United States',
    state: 'Florida',
    phone: '',
    fax: '',
    status: true,
  }),
  contact: new StoreData({
    name: global.INSTALL.SHOP_NAME,
    email: global.BO.EMAIL,
    registrationNumber: ' ',
    address1: '',
    address2: '',
    postcode: '',
    city: '',
    country: 'France',
    phone: '',
    fax: '',
  }),
};
