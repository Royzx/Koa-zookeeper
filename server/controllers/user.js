const userInfoService = require('./../services/user');
const userCode = require('./../codes/user');

module.exports = {
    async getUserInfo() {
        let result = {
            success: true,
            message: 'getUserInfo',
            data: null,
            code: ''
        }
        this.body = result;
    },

    async signIn() {
        let formData = this.request.body;
        let result = {
            success: true,
            message: 'getUserInfo',
            data: null,
            code: ''
        }

        let userResult = await userInfoService.signIn(formData);

        if (userResult) {
            result.success = true;
            result.data = userResult;
        }

        this.body = result;
    }
}