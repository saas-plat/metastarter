import {
  BaseData,
} from '@saas-plat/metaschema';

export default BaseData('BankAccount',  {
  Code: {
    mapping: 'code'
  },
  Name: String,
  NewBalance: Number,
  // ------------ actions -----------------
  customAction1: async () => {

  }
})
