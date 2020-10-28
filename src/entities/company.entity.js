const mongoose=require('mongoose')
const CompanySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    businessNature:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    location:{
        lat:String,
        lon:String
    }
})
const Company = mongoose.model('Company',CompanySchema)


module.exports={CompanySchema,Company}