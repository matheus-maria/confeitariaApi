const mongoose = require('mongoose');

const Recipe = mongoose.model('Recipe');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;
        const recipe = await Recipe.paginate({}, { page, limit: 10});

        return res.json(recipe);
    },

    async show(req, res) {
        const recipe = await Recipe.findById(req.params.id);

        return res.json(recipe);
    },

    async store(req, res) {
        const recipe = await Recipe.create(req.body);

        return res.json(recipe);
    },

    async update(req, res) {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(recipe);
    },

    async delete(req, res) {

        await Recipe.findByIdAndDelete(req.params.id);

        return res.send();
    },


}