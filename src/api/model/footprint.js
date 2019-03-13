module.exports = class extends think.Model {
  async addFootprint(userId, goodsId) {
    const that = this;
    // 用户已经登录才可以添加到足迹
    // 时间需要修改
    if (userId > 0 && goodsId > 0) {
      await this.add({
        id: think.uuid("v4").replace(/-/g,''),
        goods_id: goodsId,
        user_id: userId,
        add_time: ['exp', 'CURRENT_TIMESTAMP()']
      });
    }
  }
};
