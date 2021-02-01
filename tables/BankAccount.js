import {
  DataTable,
  Types
} from '@saas-plat/metaschema';

export default DataTable('BankAccount', {
  Code: {
    type: String,
    mapping: 'code'
  },
  Name: {
    type: String,
    mapping: 'name'
  },
  NewBalance: Number,
  Other: Types.Mixed,
  // ------------ actions -----------------
  customAction1: {
    type: 'function',
    handle: () => {
      // todo
    }
  }
})
