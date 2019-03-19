// default config
module.exports = {
  default_module: 'api',
  weixin: {
    // appid: 'wx7ed04fb004ff7d94', // 小程序 appid
    // secret: '137a959a46a9409d1649f6d15ab33fd4', // 小程序密钥
    appid: 'wx4c5f27bf70a4cc63', // 小程序  appid
    secret: '2fbaf30a721e9be88d681fef79e14bb2', // 小程序密钥
    mch_id: '1528731491', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
