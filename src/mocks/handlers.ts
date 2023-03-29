import { rest } from 'msw'
const randomNumber = Math.floor(Math.random() * 100) + 1;

const drinks = [
    {
        "idDrink": () => randomNumber,
        "strDrink": "Lassi - Sweet",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Other / Unknown",
        "strIBA": null,
        "strAlcoholic": "Non alcoholic",
        "strGlass": "Highball glass",
        "strInstructions": "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
        "strInstructionsES": null,
        "strInstructionsDE": "Alle Zutaten in einen Mixer geben und schaumig rühren. Kühl servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Metti tutti gli ingredienti in un frullatore e frulla fino a ottenere un composto omogeneo e spumoso. Servire freddo.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg",
        "strIngredient1": "Yoghurt",
        "strIngredient2": "Water",
        "strIngredient3": "Sugar",
        "strIngredient4": "Salt",
        "strIngredient5": "Lemon juice",
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 cup ",
        "strMeasure2": "2 cups cold ",
        "strMeasure3": "4 tblsp ",
        "strMeasure4": "pinch ",
        "strMeasure5": "2 tblsp ",
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-02-20 15:18:05"
    }
]



export const handlers = [
    rest.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                drinks: drinks
            })

        )

    })
]
