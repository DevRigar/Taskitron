const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
        },
    description:{
        type: String
    },
    location:{
        type: String
    },
    priority:{
        type:String,
        enum:{
            values:['','red','yellow','green'],
            message:'{VALUE} is not supported'
        }

    },
    assign:{
        type: String
    },
    list:[String],
    date:{
        type: String,
    },
    },
    
    {
    timestamps:true
    }
)

module.exports = mongoose.model('Task',taskSchema)
