const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose=require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const {User} = require('../entities/user.entity')

/**@type {AdminBro.AdminBroOptions} */

const userResource={
   User
}

module.exports=userResource