export const POOLS = {
  Pagination: {
    PerPage: 75
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [
      '0x3345bbb9f7c8d45f373155cf931f2b127027af7e000200000000000000000006'
    ]
  },
  BlockList: [
    '0x03b3cc19e4087fd3d63167a604ef8063b095ba16000100000000000000000006'
  ],
  Stable: {
    AllowList: [
      '0x3345bbb9f7c8d45f373155cf931f2b127027af7e000200000000000000000006'
      //'0x7c91c6e404cf0235604e4d99897259b6d2fd4fcc00020000000000000000000b'
    ]
  },
  Factories: {
    '0x58AA5AAF61B4559f83097bb20c856DEff1Ebf63C': 'stablePool',
    '0x5c4DC4657f0ea986D7337AcAD3307372779300C6': 'weightedPool', //fuji
    '0x8aA20Dca511e525981Df77871f2D6F5055Ea381b': 'weightedPool' //fuji
    //'0x6CA5DEfACb733E69d4cEe03f8d008F274BC3d9dd': 'weightedPool', //fuji 2 token
    //'0x09d0737d6409B91FAebe77199C85302293699375': 'stablePool' //fuji metastable
  }
};
