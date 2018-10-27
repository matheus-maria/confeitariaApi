const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RecipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    categoryId:{
        type: String,
        required: true
    },
    ingredients:{
        type:Array,
        require: true
    },
    preparation: {
        type:Array,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

RecipeSchema.plugin(mongoosePaginate);

mongoose.model('Recipe',RecipeSchema);