const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose=require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const {Company} = require('../entities/company.entity')

/**@type {AdminBro.AdminBroOptions} */

const companyResource={
   Company
}

module.exports=companyResource