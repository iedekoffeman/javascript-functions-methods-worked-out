// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
//Definieer functie
//Voeg parameter email toe
//lees de string en bepaal (deel de string op eigenlijk) wat het domeinnaam is met een string object methode split
//geef de output (domeinaam) terug
//log de output in de console
const getEmailDomain = (email) => {
    const emailSplit = email.split("@");
    return emailSplit[1];
}
console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//Definieer functie
//Voeg parameter email toe
//Knip de string op dmv de split methode
//Schrijf een if statement om te kijken of het domeinnaam voldoet aan de voorwaarde
//Geef het benodigde type terug (Student, medewerker, extern)
//Log de uitkomst in de console
const typeOfEmail = (email) => {
    const emailSplit = email.split("@");
    const domain = emailSplit[1];
    //If statement refactored naar een switch statement, werkt beide, maar dit ziet er schoner uit.
    let typeDomain = "";
    switch(domain) {
        case "novi-education.nl":
            typeDomain = " is van type student";
            break;
        case "novi.nl":
            typeDomain = " is van type Medewerker";
            break;
        case "outlook.com":
            typeDomain = " is van type Extern";
            break;
    }
    return domain + typeDomain;
}
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjes@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

//Definieer functie
//Voeg parameter email toe
//Controleer of de waarde van het meegegeven email adres een @ bevat
//Controleer of de waarde van het meegegeven email adres geen , bevat
//Controleer of er geen . als allerlaatste karakter in voorkomt
//Schrijf een if statement om te kijken of dit waar of niet waar is en geef
//Geef de uitkomst terug
//Log de uitkomst in de console

const checkEmailValidity = (email) => {
    const hasAtinString = email.includes("@");
    const hasCommaInString = email.includes(",");
    let outcome = "";
    if(hasAtinString) {
        outcome += " Bevat een @";
    }
    if(hasCommaInString) {
        outcome += " Bevat een ,"
    }
    return email + outcome;
}
console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi,nl"));