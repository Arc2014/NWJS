var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: '/home/arcosta/desenvolvimento/node/manager/', // use the glob format
    platforms: ['win64'],
    version: '0.14.6'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});