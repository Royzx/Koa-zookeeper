const config = require('./../../config');
const nzd = require('node-zookeeper-dubbo');

const Dubbo = new nzd(config.zookeeperConfig);

const user = {
    async signIn(formData) {
        let result = null;
        await Dubbo.Foo
            .getUserByCorpIdDDID({
                'class': 'java.lang.String',
                '$': formData.corpid
            }, {
                '$class': 'java.lang.String',
                '$': formData.dduserid
            })
            .then(data => result = data)
            .then(err => result = err)

        return result;
    }
}