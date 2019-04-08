const Base = require('./base.js');

module.exports = class extends Base {
  /**
   *
   * @returns {Promise<void|Promise|PreventPromise>}
   */
  async addAction() {
    const feedbackData = {
      id:this.getUuid(),
      msg_type: this.post('msg_type'),
      user_email: this.post('msg_mobile'),
      msg_content: this.post('msg_content')
    };
    return this.success( this.model('feedback').addFeedBack(feedbackData));
  }

};
