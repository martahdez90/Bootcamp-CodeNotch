let continents = (country: string) => {

    if (country === "China" || country === "Japan" || country === "India") {
        console.log("Asia");
    } else if (country === "UK" || country ===  "France" || country === "Italy" || country === "Spain" || country === "Ireland") {
        console.log("Europe");
    } else if (country === "USA" || country ===  "Canada" || country === "Argentina" || country === "Mexico") {
        console.log("America");
    } else if (country === "Moroco" || country ===  "Egypt" || country === "South Africa" || country === "Madagascar") {
        console.log("Africa");
    } else if (country === "Australia" || country ===  "New Zeland") {
        console.log("Oceania");
    } else if (country === "Antarctica") {
        console.log("Antarctica");
    } else {
        console.log("Write another country");
    }
};
continents("India");
continents("Italy")
continents("Mexico");
continents("Egypt");
continents("New Zeland");
continents("Culululu")