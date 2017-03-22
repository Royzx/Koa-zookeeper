const config = require('./../../config');
const nzd = require('node-zookeeper-dubbo');

const Dubbo = new nzd(config.zookeeperConfig);

const user = {
    async signIn(formData) {
        let result;
        await Dubbo.Foo
            .getUserByCorpIdDDId({
                '$class': 'java.lang.String',
                '$': formData.corpid
            }, {
                '$class': 'java.lang.String',
                '$': formData.dduserid
            })
            .then(data => result = data)
            .catch(err => result = err)

        return result;
    }
}

module.exports = user;