import {
  Rule
} from '@saas-plat/metaschema';
import BankAccount from '../entities/BankAccount';

export default Rule('xxxx rule', [
  ["or",
    ["not", Number, "n1", ({
      n1
    }) => n1 == 1],
    ["not", String, "s1", ({
      s1
    }) => s1 == 'hello'],
    ["not", Date, "d1", ({
      d1
    }) => d1.getDate() == new Date().getDate()]
  ],
  [BankAccount, "account"]
], ({
  account
}) => {
  account.NewBalance = 100;
})
