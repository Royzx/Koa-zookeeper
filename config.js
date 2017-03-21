const config = {
    port: 5210,
    zookeeperConfig: {
        application: {
            name: 'node_consumer'
        },
        register: '127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183',
        dubboVer: '2.5.3',
        root: 'dubbo',
        dependencies: {
            Foo: {
                interface: 'com.xfn.mf.service.UserService',
                timeout: 6000
            }
        }
    }
}

module.exports = config;