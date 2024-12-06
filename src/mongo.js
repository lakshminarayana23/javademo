// const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
// .then(()=>{
//     console.log('mongoose connected');
// })
// .catch((e)=>{
//     console.log('failed');
// })

// const logInSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

// module.exports=LogInCollection

const mongoose = require("mongoose");

// Use your MongoDB Atlas connection string
mongoose.connect("mongodb+srv://lucky:%40Lucky3629@cluster0.710vs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Mongoose connected to MongoDB Atlas');
})
.catch((e) => {
    console.log('Failed to connect to MongoDB Atlas', e);
});

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection = mongoose.model('LogInCollection', logInSchema);

module.exports = LogInCollection;
