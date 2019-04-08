module.exports = class extends think.Model {
    async addFeedBack(feefData) {
        const that = this;
        await that.model('feedback').add(feefData);
    }
};
