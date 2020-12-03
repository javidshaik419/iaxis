const user = require('./user')



module.exports.initialize = function (app) {
 console.log("hello");
 console.log("====",app)
    /* Employee */
    app.use('/emp', user)

}
