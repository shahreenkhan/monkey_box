const mongoose = require('mongoose')

const connectdb = ()=>{
    return mongoose.connect('mongodb://localhost:27017/monkeybox_api')
    .then(()=>{
        console.log('connected successfully')
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = connectdb