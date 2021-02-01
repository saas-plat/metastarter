import {
  View,
} from '@saas-plat/metaschema';
// import ApplyOrder from '../vms/ApplyOrder';
const d = require('debug')('xxxx')

d('debug ok');

export default View({
  name: 'toolbar',
  type: 'buttongroup',
  items: [{
    type: 'button',
    text: 'Button1',
    style: 'primary'
  }, {
    type: 'button',
    text: 'Button2'
  }, {
    type: 'button',
    text: 'Button3'
  }, {
    bind: 'button1'
  }]
})
