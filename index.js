/* Little commentary to see if my commits are
directly push to my GitHub account
*/

const { log } = require("console")

// first step : create an array that contains lists of anectdotes 
let months = [
    // January
    ["Le 1er janvier est le seul jour de l'année où l'on peut souhaiter la bonne année à des inconnus sans passer pour un fou."
    ,"Le 21 janvier est la journée internationale des câlins, mais aussi celle du fromage. Coïncidence ? Je ne crois pas."],
    //February
    ["Le 2 février est le jour de la marmotte, mais aussi celui des crêpes. Si vous voyez une marmotte sortir de son terrier avec une crêpe dans la bouche, c'est que le printemps est proche."
    ,"Le 14 février est la Saint-Valentin, mais aussi la fête nationale du préservatif. Un moyen efficace de rappeler l'importance de se protéger."],
    // March
    ["Le 8 mars est la journée internationale des droits des femmes, mais aussi celle du rein. Un organe essentiel pour filtrer les toxines, comme le sexisme."
    ,"Le 20 mars est le jour du macaron, mais aussi celui du bonheur. Un lien évident entre ces deux concepts."],
    // April
    ["Le 1er avril est le jour des poissons d'avril, mais aussi celui de la blague. Une occasion de rire et de se moquer gentiment de ses proches"
    ,"Le 22 avril est le jour de la Terre, mais aussi celui du livre. Deux éléments indispensables à la vie et à la culture."],
    // May
    ["Le 1er mai est le jour du muguet, mais aussi celui du travail. Un paradoxe entre le repos et l'effort."
    ,"Le 4 mai est le jour de Star Wars, mais aussi celui des pompiers. Que la force soit avec eux !"],
    // June
    ["Le 5 juin est le jour mondial de l'environnement, mais aussi celui du donut. Un dilemme entre la protection de la planète et la gourmandise."
    ,"Le 21 juin est le jour de la musique, mais aussi celui de la fête des pères. Une occasion de chanter et de danser avec son papa."],
    // July
    ["Le 1er juillet est le jour du Canada, mais aussi celui du déménagement. Un choix cornélien entre rester ou partir."
    ,"Le 14 juillet est le jour de la fête nationale française, mais aussi celui de la bataille des Alpes. Un contraste entre la célébration et le conflit."],
    // August
    ["Le 8 août est le jour international du chat, mais aussi celui du champagne. Un mélange explosif entre les griffes et les bulles."
    ,"Le 15 août est le jour de l'Assomption, mais aussi celui du canard. Une association improbable entre la religion et l'animal."],
    // September
    ["Le 5 septembre est le jour international de la charité, mais aussi celui du fromage. Un geste généreux et savoureux à la fois."
    ,"Le 19 septembre est le jour international du parler pirate, mais aussi celui du rhum. Un langage et une boisson qui font bon ménage."],
    // October
    ["Le 4 octobre est le jour mondial des animaux, mais aussi celui de la vodka. Un hommage aux bêtes et aux verres."
    ,"Le 31 octobre est le jour d'Halloween, mais aussi celui des économies d'énergie. Un moyen de faire peur et de faire des économies en même temps."],
    // November
    ["Le 1er novembre est le jour de la Toussaint, mais aussi celui du véganisme. Une façon de respecter les morts et les vivants."
    ,"Le 11 novembre est le jour du souvenir, mais aussi celui du shopping. Une commémoration et une consommation qui peuvent sembler contradictoires."],
    // December
    ["Le 5 décembre est le jour international du bénévolat, mais aussi celui du ninja. Un engagement et une discrétion qui se rejoignent."
    ,"Le 25 décembre est le jour de Noël, mais aussi celui du pudding. Un régal pour les papilles et pour les yeux."],
]

// retrieving a random object from the months list
const randomMonth = Math.floor(Math.random() * months.length);

// retrieving a random anecdotes from a month's anecdotes list
const randomStory = Math.floor(Math.random() * months[randomMonth].length);

console.log(randomStory);