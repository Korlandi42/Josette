const mongoose = require('mongoose')
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    text: { type: String, required: true },
    ingredients: { type: String, required: true }
})

const Recipe = mongoose.model('Recipe', recipeSchema)
Recipe.countDocuments()
.then(count => {
    if (count === 0) {
        Recipe.create([
            {text: `
            Makes 12
            Prep 16-17 hours, including overnight chilling
            Bake 15 – 20 minutes
            
            Croissants are ubiquitous these days and they can be very disappointing. But, made well, there is nothing better than a warm croissant. Just add coffee and a newspaper for the perfect breakfast. Making the dough is a long process, but the technique itself is relatively easy. The crucial thing is neatness when adding the rolled out butter. If the butter does not fit neatly right to the edge of the dough, you will end up with parts of the croissant with no butter. It’s also important to keep everything cool as you work, including your hands.
            
            1. Put the flour into a bowl of a mixer fitted with a dough hook. Add the salt and sugar to one side of the bowl and the yeast to the other. Add the water and mix on a slow speed for 2 minutes, then on a medium speed for 6 minutes. The dough should be fairly stiff.
            
            2. Tip the dough out onto a lightly floured surface and shape it into a ball. Dust with flour, put into a clean plastic bag and chill in the fridge for an hour.
            
            3. On a lightly floured surface, roll out your dough to a rectangle, about 60 x 20cm; it should be about 1cm thick. Flatten the butter to a rectangle, about 40 x 19cm, by bashing it with a rolling pin. Put the butter on the dough so that it covers the bottom two-thirds of the dough. Make sure that it is positioned neatly and comes almost to the edges.
            
            4. Fold the exposed dough at the top down over one-third of the butter. Now gently cut off the exposed bit of butter, without going through the dough, and put it on the top of the dough you have just folded down. Fold the bottom half of the dough up. You will now have a sandwich of two layers of butter and three of dough. Pinch the edges lightly to seal in the butter. Put the dough back in the plastic bag and chill in the fridge for an hour to harden the butter.
            
            5. Take the dough out of the bag and put it on the lightly floured work surface with a short end towards you. Roll into a rectangle, about 60 x 20cm, as before. This time fold up one-third of the dough and then fold the top third down on top to make a neat square to make a neat square. This is called a single turn. Put the dough back into the plastic bag and chill for another hour. Repeat this stage twice more, putting the dough back into the fridge for an hour between turns.
            
            6. Your dough now needs to be left in the fridge for 8 hours, or overnight, to rest and rise slightly.
            
            7. When you are ready to shape the croissants, line 2 or 3 baking trays with baking parchment or silicone paper.
            
            8. Put the dough on a lightly floured surface and roll out to a rectangle, a little more than 42cm long and 30cm wide; it should be about 7mm thick. Trim the edges to neaten them.
            
            9. Cut the rectangle lengthways into 2 strips, then cut triangles along the length of each strip; these should be 12cm wide at the base and about 15cm high (from the middle of the base to the tip). Once you have cut the first triangle, you can use it as a template for the rest. You should get 6 triangles from each strip.
            
            10. Before rolling, hold down the wide base of the triangle and gently tug the opposite thin end to cause a slight tension in the dough. Now starting at the thick end of the triangle, roll up into a croissant. You will have 12 medium-sized croissants. For a traditional crescent shape, turn the ends in towards each other slightly.
            
            11. Put the croissants on the prepared baking trays, leaving space in between them to expand; allow 4 – 6 per tray. Put each tray inside a clean plastic bag and leave the croissants to rise at cool room temperature (18 – 24°C) until at least doubled in size. This should take about 2 hours.
            
            12. Heat your oven to 200°C.
            
            13. Lightly whisk the egg with a pinch of salt to make an egg wash. Brush the top and sides of the croissants with the eggwash. Bake for 15 – 20 minutes or until golden brown. Cool on a wire rack. Eat warm.
            
            `, ingredients: `
            - 500g strong white bread flour, plus extra for dusting
            
            - 10g salt, plus a pinch for the eggwash
            
            - 80g caster sugar
            
            - 10g instant yeast
            
            - 300ml cool water
            
            - 300g chilled unsalted butter, preferably a good-quality Normandy butter
            
            - 1 medium egg to glaze`},
        ])
    }
})

module.exports = Recipe