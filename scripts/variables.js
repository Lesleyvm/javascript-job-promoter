// Opdracht 1A
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");
// waarom moet ik mijn variables NA main plaatsen in html terwijl anders staat aangegeven?

// Opdracht 1B
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);

// Opdracht 1C
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers");

// Opdracht 1D
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.description);

////////////////////////////////////////////////

// Opdracht 2A

// const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);
//
// // Opdracht 2B
//
// switch (userInput) {
//     case 'marketing':
//         console.log("Je koos Marketing " + departments.marketing.description);
//         break;
//
//     case 'sales':
//         console.log("Je koos Sales " + departments.sales.description);
//         break;
//
//     case 'customer service':
//         console.log("Je koos Customer-Service " + departments["customer-service"].description);
//         break;
//
// // Opdracht 2C
//
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
//
// }

////////////////////////////////////////////////

// // Opdracht 3A

const userInput = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + " " +
    "0: " + departments.marketing.jobs[0].title + " " +
    "1: " + departments.marketing.jobs[1].title + " " +
    "2: " + departments.marketing.jobs[2].title + " " +
    "3: " + departments.marketing.jobs[3].title);

console.log(userInput);

// // Opdracht 3B

switch (userInput) {
    case '0':
        console.log("Je koos" + " "
            + departments.marketing.jobs[0].title + " "
            + "Een uitdagende rol!" + " "
            + departments.marketing.jobs[0].description);
        break;

    case '1':
        console.log("Je koos" + " "
            + departments.marketing.jobs[1].title + " "
            + "Een uitdagende rol!" + " "
            + departments.marketing.jobs[1].description)
        break;

    case '2':
        console.log("Je koos" + " "
            + departments.marketing.jobs[2].title + " "
            + "Een uitdagende rol!" + " "
            + departments.marketing.jobs[2].description)
        break;

    case '3':
        console.log("Je koos" + " "
            + departments.marketing.jobs[3].title + " "
            + "Een uitdagende rol!" + " "
            + departments.marketing.jobs[3].description)
        break;

    default:
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
}