const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategorytSchema = new mongoose.Schema({   
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

CategorytSchema.plugin(mongoosePaginate);

mongoose.model('Category',CategorytSchema);