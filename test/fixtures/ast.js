module.exports = {
  type: 'root',
  nodes: [
    {
      type: 'bos',
      val: ''
    },
    {
      type: 'brace',
      nodes: [
        {
          type: 'brace.open',
          val: '{'
        },
        {
          type: 'text',
          val: 'a'
        },
        {
          type: 'comma',
          val: ','
        },
        {
          type: 'text',
          val: 'b'
        },
        {
          type: 'comma',
          val: ','
        },
        {
          type: 'brace',
          nodes: [
            {
              type: 'brace.open',
              val: '{'
            },
            {
              type: 'text',
              val: 'a'
            },
            {
              type: 'comma',
              val: ','
            },
            {
              type: 'text',
              val: 'b'
            },
            {
              type: 'brace.close',
              val: '}'
            }
          ]
        },
        {
          type: 'brace.close',
          val: '}'
        }
      ]
    },
    {
      type: 'text',
      val: 'foo'
    },
    {
      type: 'eos',
      val: ''
    }
  ]
};
