const schema = {
    type: 'object',
    properties: {
      status: {
        type: 'boolean'
      },
      message: {
        type: 'string'
      },
      id_goods: {
        type: 'number'
      },
      in_cart: {
        type: 'number'
      },
      sgfs_in_cart: {
        type: 'boolean'
      },
      type: {
        type: 'string'
      },
      orderCashback: {
        type: 'string'
      },
      goodsJSON: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          id: {
            type: 'string'
          },
          price: {
            type: 'number'
          },
          brand: {
            type: 'string'
          },
          category: {
            type: 'string'
          },
          quantity: {
            type: 'number'
          }
        },
        required: ['name', 'id', 'price', 'brand', 'category', 'quantity']
      },
      context: {
        type: 'string'
      }
    },
    required: ['status', 'message', 'id_goods', 'in_cart', 'sgfs_in_cart', 'type', 'orderCashback', 'goodsJSON', 'context']
  };
  
  module.exports = schema;