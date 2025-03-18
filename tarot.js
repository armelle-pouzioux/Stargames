// TAROT 

const tarotMajorArcana = [
    {
        name: "Le Bateleur",
        description: "Créativité, volonté, habileté, concentration. Le Bateleur est un maître de la transformation et de l'action.",
        emoji: "🎩"
    },
    {
        name: "La Papesse",
        description: "Intuition, mystère, sagesse intérieure, subconscient. Elle représente les secrets et la connaissance cachée.",
        emoji: "🌙"
    },
    {
        name: "L'Impératrice",
        description: "Abondance, fertilité, créativité, maternité. Elle incarne la nature et la générosité.",
        emoji: "👑"
    },
    {
        name: "L'Empereur",
        description: "Autorité, structure, stabilité, leadership. Il représente le pouvoir et la discipline.",
        emoji: "🏰"
    },
    {
        name: "Le Pape",
        description: "Tradition, spiritualité, enseignement, conformité. Il symbolise les institutions et les croyances établies.",
        emoji: "📖"
    },
    {
        name: "Les Amoureux",
        description: "Amour, harmonie, relations, choix. Cette carte évoque l'union et les décisions importantes.",
        emoji: "💑"
    },
    {
        name: "Le Chariot",
        description: "Volonté, détermination, victoire, contrôle. Le Chariot représente la direction et la maîtrise de soi.",
        emoji: "🛡️"
    },
    {
        name: "La Justice",
        description: "Équilibre, justice, vérité, karma. Cette carte symbolise l'équité et les conséquences des actions.",
        emoji: "⚖️"
    },
    {
        name: "L'Ermite",
        description: "Introspection, sagesse, solitude, guidance. L'Ermite cherche la vérité intérieure.",
        emoji: "🕯️"
    },
    {
        name: "La Roue de Fortune",
        description: "Changement, cycles, destin, opportunités. Cette carte représente les hauts et les bas de la vie.",
        emoji: "🎡"
    },
    {
        name: "La Force",
        description: "Courage, maîtrise de soi, compassion, force intérieure. Elle symbolise la force mentale et émotionnelle.",
        emoji: "🦁"
    },
    {
        name: "Le Pendu",
        description: "Sacrifice, lâcher-prise, nouvelle perspective, patience. Le Pendu invite à voir les choses différemment.",
        emoji: "🙃"
    },
    {
        name: "La Mort",
        description: "Transformation, fin, renaissance, changement. Cette carte symbolise la fin d'un cycle et le début d'un autre.",
        emoji: "💀"
    },
    {
        name: "Tempérance",
        description: "Équilibre, modération, harmonie, guérison. Tempérance représente l'équilibre entre les extrêmes.",
        emoji: "🕊️"
    },
    {
        name: "Le Diable",
        description: "Attachement, tentation, illusions, limitations. Le Diable représente les chaînes que l'on s'impose.",
        emoji: "😈"
    },
    {
        name: "La Maison Dieu",
        description: "Bouleversement, révélation, destruction, libération. Cette carte symbolise un changement soudain et radical.",
        emoji: "🌩️"
    },
    {
        name: "L'Étoile",
        description: "Espoir, inspiration, guidance, sérénité. L'Étoile apporte lumière et optimisme.",
        emoji: "🌟"
    },
    {
        name: "La Lune",
        description: "Illusion, intuition, subconscient, rêves. La Lune représente les peurs et les mystères cachés.",
        emoji: "🌕"
    },
    {
        name: "Le Soleil",
        description: "Joie, succès, vitalité, clarté. Le Soleil apporte lumière et bonheur.",
        emoji: "☀️"
    },
    {
        name: "Le Jugement",
        description: "Renaissance, éveil, absolution, appel intérieur. Cette carte symbolise un nouveau départ.",
        emoji: "📯"
    },
    {
        name: "Le Monde",
        description: "Accomplissement, totalité, réussite, voyage. Le Monde représente l'achèvement d'un cycle.",
        emoji: "🌍"
    },
    {
        name: "Le Mat",
        description: "Innocence, spontanéité, nouveau départ, aventure. Le Mat représente le début d'un voyage.",
        emoji: "🃏"
    },
    {
        name: "Le Bateleur",
        description: "Manque de concentration, tromperie, manipulation, dissimulation. Le Bateleur inversé peut indiquer une perte de direction ou une tentative d'agir sans préparation.",
        emoji: "🎩🔄"
    },
    {
        name: "La Papesse",
        description: "Ignorance de l'intuition, secrets non révélés, confusion intérieure. La Papesse inversée suggère un manque de sagesse ou de réflexion profonde.",
        emoji: "🌙🔄"
    },
    {
        name: "L'Impératrice",
        description: "Stagnation créative, dépendance, frustration. L'Impératrice inversée peut évoquer une période de blocage ou d'incapacité à nourrir ses projets.",
        emoji: "👑🔄"
    },
    {
        name: "L'Empereur",
        description: "Rigidité, abus de pouvoir, contrôle excessif, tyrannie. L'Empereur inversé symbolise une autorité mal utilisée ou une absence de structure.",
        emoji: "🏰🔄"
    },
    {
        name: "Le Pape",
        description: "Dogmatisme, isolement spirituel, rigidité des croyances. Le Pape inversé peut indiquer des conflits avec les traditions ou une spiritualité déformée.",
        emoji: "📖🔄"
    },
    {
        name: "Les Amoureux",
        description: "Indécision, conflit intérieur, choix malavisés. Les Amoureux inversés révèlent souvent des dilemmes importants ou une relation qui manque d'harmonie.",
        emoji: "💑🔄"
    },
    {
        name: "Le Chariot",
        description: "Perte de contrôle, échec de la direction, dispersion. Le Chariot inversé évoque une incapacité à avancer ou à maîtriser les situations.",
        emoji: "🛡️🔄"
    },
    {
        name: "La Justice",
        description: "Injustice, partialité, déséquilibre, mensonges. La Justice inversée reflète une situation où la vérité et l'équité sont compromises.",
        emoji: "⚖️🔄"
    },
    {
        name: "L'Ermite",
        description: "Isolement excessif, solitude choisie, évasion de la réalité. L'Ermite inversé indique parfois une fuite de la vérité ou un manque d'introspection.",
        emoji: "🕯️🔄"
    },
    {
        name: "La Roue de Fortune",
        description: "Mauvais timing, échec des opportunités, changements imprévus. La Roue de Fortune inversée suggère une période de malchance ou d'instabilité.",
        emoji: "🎡🔄"
    },
    {
        name: "La Force",
        description: "Perte de maîtrise de soi, lâcher prise, faiblesse intérieure. La Force inversée évoque des difficultés à maintenir son calme ou sa résilience.",
        emoji: "🦁🔄"
    },
    {
        name: "Le Pendu",
        description: "Refus du sacrifice, stagnation, manque de patience. Le Pendu inversé peut indiquer une période de frustration ou une résistance au changement.",
        emoji: "🙃🔄"
    },
    {
        name: "La Mort",
        description: "Refus de la transformation, peur du changement, stagnation. La Mort inversée représente un blocage dans le processus de transition ou de renouveau.",
        emoji: "💀🔄"
    },
    {
        name: "Tempérance",
        description: "Excès, déséquilibre, manque d'harmonie. Tempérance inversée indique une situation où l'équilibre est rompu ou les extrêmes sont exacerbés.",
        emoji: "🕊️🔄"
    },
    {
        name: "Le Diable",
        description: "Libération difficile, tentation, dépendance, illusion. Le Diable inversé symbolise une opportunité de se libérer des chaînes, mais avec des résistances.",
        emoji: "😈🔄"
    },
    {
        name: "La Maison Dieu",
        description: "Effondrement, déstabilisation, chaos, changement inattendu. La Maison Dieu inversée peut annoncer une crise intérieure ou des bouleversements difficiles à surmonter.",
        emoji: "🌩️🔄"
    },
    {
        name: "L'Étoile",
        description: "Perte d'espoir, désillusion, manque de direction. L'Étoile inversée évoque une perte de confiance ou un sentiment d'obscurité.",
        emoji: "🌟🔄"
    },
    {
        name: "La Lune",
        description: "Confusion, illusion, mensonge, tromperie. La Lune inversée fait référence à des mystères cachés, des peurs non résolues ou des vérités dissimulées.",
        emoji: "🌕🔄"
    },
    {
        name: "Le Soleil",
        description: "Obscurité, échec, stagnation, manque de vitalité. Le Soleil inversé évoque des périodes d'incertitude ou de bonheur déçu.",
        emoji: "☀️🔄"
    },
    {
        name: "Le Jugement",
        description: "Non-éveil, retard, rejet des appels intérieurs. Le Jugement inversé peut suggérer un retard dans l'acceptation de la transformation ou de la rédemption.",
        emoji: "📯🔄"
    },
    {
        name: "Le Monde",
        description: "Échec d'accomplissement, stagnation, cycle incomplet. Le Monde inversé indique des projets ou des rêves non réalisés, ou une incompréhension de l'objectif final.",
        emoji: "🌍🔄"
    },
    {
        name: "Le Mat",
        description: "Imprudence, naïveté, fuite des responsabilités, insouciance. Le Mat inversé représente un manque de préparation ou de maturité dans le début d'un voyage.",
        emoji: "🃏🔄"
    }
];

const tarotButton = document.getElementById("tarotButton");
const futurarea = document.getElementById("futurarea");

function drawRandomCard() {
    
    futurarea.innerHTML = "";

    const randomIndex = Math.floor(Math.random() * tarotMajorArcana.length);
    const carteTiree = tarotMajorArcana[randomIndex];

    const carteElement = document.createElement("div");
    carteElement.classList.add("carte");
    carteElement.innerHTML = `
        <span>${carteTiree.emoji}</span>
        <h3>${carteTiree.name}</h3>
        <p>${carteTiree.description}</p>
    `;
    futurarea.appendChild(carteElement);
}

tarotButton.addEventListener("click", drawRandomCard);
