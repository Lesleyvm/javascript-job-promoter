// Opdracht 1A
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");
// waarom moet ik mijn variables NA main plaatsen in html terwijl anders staat aangegeven?

// Opdracht 1B
console.log("Marketing is een leuke afdeling om te werken. " + departments.sales.description);

// Opdracht 1C
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers");

// Opdracht 1D
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.description);

////////////////////////////////////////////////

// Opdracht 2A origineel

// const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [sales / sales / customer-service]');
// console.log(userInput);
//
// // Opdracht 2B
//
// switch (userInput) {
//     case 'sales':
//         console.log("Je koos Marketing " + departments.sales.description);
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

// // // Opdracht 3A origineel
//
// const userInput = prompt("Je koos sales. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + " " +
//     "0: " + departments.sales.jobs[0].title + " " +
//     "1: " + departments.sales.jobs[1].title + " " +
//     "2: " + departments.sales.jobs[2].title + " " +
//     "3: " + departments.sales.jobs[3].title);
//
// console.log(userInput);
//
// // // Opdracht 3B
//
// switch (userInput) {
//     case '0':
//         console.log("Je koos" + " "
//             + departments.sales.jobs[0].title + " "
//             + "Een uitdagende rol!" + " "
//             + departments.sales.jobs[0].description);
//         break;
//
//     case '1':
//         console.log("Je koos" + " "
//             + departments.sales.jobs[1].title + " "
//             + "Een uitdagende rol!" + " "
//             + departments.sales.jobs[1].description)
//         break;
//
//     case '2':
//         console.log("Je koos" + " "
//             + departments.sales.jobs[2].title + " "
//             + "Een uitdagende rol!" + " "
//             + departments.sales.jobs[2].description)
//         break;
//
//     case '3':
//         console.log("Je koos" + " "
//             + departments.sales.jobs[3].title + " "
//             + "Een uitdagende rol!" + " "
//             + departments.sales.jobs[3].description)
//         break;
//
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
// }

///////////////////////////////////////////

// Opdracht 4 samenvoeging

const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer service]');
console.log(userInput);


if (userInput === 'marketing') {
    console.log("Marketing is een leuke afdeling om te werken." + " " + "Er werken op dit moment" + " " + departments["marketing"].numberOfEmployees + " " + "medewerkers.");

    const userInputMarketing = prompt("Je koos Marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + " " +
        "0: " + departments.marketing.jobs[0].title + " " +
        "1: " + departments.marketing.jobs[1].title + " " +
        "2: " + departments.marketing.jobs[2].title + " " +
        "3: " + departments.marketing.jobs[3].title);
    console.log(userInputMarketing);

    switch (userInputMarketing) {
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


} else if (userInput === 'sales') {
    console.log("Sales is een leuke afdeling om te werken." + " " + "Er werken op dit moment" + " " + departments["sales"].numberOfEmployees + " " + "medewerkers.");

    const userInputSales = prompt("Je koos Sales. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + " " +
        "0: " + departments.sales.jobs[0].title + " " +
        "1: " + departments.sales.jobs[1].title + " " +
        "2: " + departments.sales.jobs[2].title + " " +
        "3: " + departments.sales.jobs[3].title);
    console.log(userInputSales);

    switch (userInputSales) {
        case '0':
            console.log("Je koos" + " "
                + departments.sales.jobs[0].title + " "
                + "Een uitdagende rol!" + " "
                + departments.sales.jobs[0].description);
            break;

        case '1':
            console.log("Je koos" + " "
                + departments.sales.jobs[1].title + " "
                + "Een uitdagende rol!" + " "
                + departments.sales.jobs[1].description)
            break;

        case '2':
            console.log("Je koos" + " "
                + departments.sales.jobs[2].title + " "
                + "Een uitdagende rol!" + " "
                + departments.sales.jobs[2].description)
            break;

        case '3':
            console.log("Je koos" + " "
                + departments.sales.jobs[3].title + " "
                + "Een uitdagende rol!" + " "
                + departments.sales.jobs[3].description)
            break;

        default:
            console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
    }


} else if (userInput === 'customer service') {
    console.log("Customer Service is een leuke afdeling om te werken." + " " + "Er werken op dit moment" + " " + departments["customer-service"].numberOfEmployees + " " + "medewerkers.");

    const userInputCustomerService = prompt("Je koos Customer Service. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + " " +
        "0: " + departments["customer-service"].jobs[0].title + " " +
        "1: " + departments["customer-service"].jobs[1].title + " " +
        "2: " + departments["customer-service"].jobs[2].title + " " +
        "3: " + departments["customer-service"].jobs[3].title);
    console.log(userInputCustomerService);

    switch (userInputCustomerService) {
        case '0':
            console.log("Je koos" + " "
                + departments["customer-service"].jobs[0].title + " "
                + "Een uitdagende rol!" + " "
                + departments["customer-service"].jobs[0].description);
            break;

        case '1':
            console.log("Je koos" + " "
                + departments["customer-service"].jobs[1].title + " "
                + "Een uitdagende rol!" + " "
                + departments["customer-service"].jobs[1].description)
            break;

        case '2':
            console.log("Je koos" + " "
                + departments["customer-service"].jobs[2].title + " "
                + "Een uitdagende rol!" + " "
                + departments["customer-service"].jobs[2].description);
            break;

        case '3':
            console.log("Je koos" + " "
                + departments["customer-service"].jobs[3].title + " "
                + "Een uitdagende rol!" + " "
                + departments["customer-service"].jobs[3].description);

            break;

        default:
            console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
    }
}
