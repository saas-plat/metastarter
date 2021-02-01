import {
  ViewModel
} from '@saas-plat/metaschema';
import {
  command
} from '@saas-plat/metaapi';

export default ViewModel('ApplyOrder', {
  id: {
    type: "SimpleModel",
    fields: {
      lable: {
        type: "string",
        default: "ID"
      },
      default: "string",
      dataSouce: {
        type: "string",
        default: "pu.order.id"
      },
    }
  },
  code: {
    type: "SimpleModel",
    fields: {
      lable: {
        type: "string",
        default: "客户编码"
      },
      default: "string",
      dataSouce: {
        type: "string",
        default: "aa.order.code"
      },
    }
  },
  name: {
    type: "SimpleModel",
    fields: {
      lable: {
        type: "string",
        default: "客户名称"
      },
      default: "string",
      dataSouce: {
        type: "string",
        default: "aa.order.name"
      },
    }
  },

  details: {
    type: "TableModel",
    fields: {
      dataSource: {
        type: "string",
        default: "aa.order.details"
      },
      columns: {
        type: "array",
        fields: {
          key: "string",
          title: "string",
          field: "string"
        },
        default: [{
          key: "inventory_name",
          title: "存货名称",
          field: "inventory.name"
        }, {
          key: "inventory_code",
          title: "存货编码",
          field: "inventory.code"
        }, {
          key: "amount",
          title: "数量",
          field: "amount"
        }]
      }
    }
  },
  receivePayments: {
    type: "TableModel",
    fields: {
      dataSource: {
        type: "string",
        default: "arap.receivePayments"
      },
      columns: {
        type: "array",
        fields: {
          key: "string",
          title: "string",
          field: "string"
        },
      }
    }
  },
  purchaseArrivals: {
    type: "TableModel",
    fields: {
      dataSource: {
        type: "string",
        default: "pu.arrivals.details"
      },
      columns: {
        type: "array",
        fields: {
          key: "string",
          title: "string",
          field: "string"
        },
      }
    }
  },
  customAction1: {
    type: 'function',
    handle: async () => {
      await command({
        name: 'customAction1'
      }).send();
    }
  }
})
