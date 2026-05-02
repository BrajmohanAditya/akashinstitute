// How many modules in one course ?? -> 10
// How many videos in one module ?? -> 10

const moduleSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"
    },
    Video:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    quize:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Quiz"
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    
}, {timestamps: true});

export const Module = mongoose.model("Modules", moduleSchema);

