import {
  Rule
} from '@saas-plat/metaschema';

import {
  i18n
} from '@saas-plat/metaapi';

export default Rule('xxxx rule', {
  "or": [{
      "not": {
        "n1": Number,
        "condition": ({
          n1
        }) => n1 == 1
      }
    },
    {
      "not": {
        "s1": String,
        "condition": ({
          s1
        }) => s1 == 'hello'
      }
    },
    {
      "not": {
        "d1": Date,
        "condition": facts => facts.d1.getDate() == new Date().getDate()
      }
    }
  ],
  "called": "Count"
}, (facts) => {
  // i18n执行时在闭包里解构
  i18n.t('xxxxxxxxx');
  facts.called.count++;

})
