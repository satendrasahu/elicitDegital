import mongoose from 'mongoose'
const uri = process.env.URI || "mongodb://localhost:27017/elicitdigital"
const connectDb  = async()=>{
    mongoose.connect(uri).then(() => {
        console.log(`database connection is succeessfull`);
    })
    .catch((e) => {
        console.log(`No connection`)
    })
}

export default connectDb