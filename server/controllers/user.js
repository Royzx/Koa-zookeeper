const userInfoService = require('./../services/user');
const userCode = require('./../codes/user');

module.exports = {
    async getUserInfo(ctx) {
        let result = {
            success: true,
            message: 'getUserInfo',
            data: null,
            code: ''
        }
        ctx.body = result
    },

    async signIn(ctx) {
        let formData = ctx.request.body;
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

        ctx.body = result;
    }
}