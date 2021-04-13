// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
//Declareer variable amountOfStudentsCumLaude die het aantal studenten bijhoudt die een 8 of hoger hebben. Deze begint op 0.
//Door de array loopen
//Controleer of elke waarde een 8 of hoger is
//Tel 1 op bij amountOfStudentsCumLaude
//Log de uitkomst in de console

let amountOfStudentsCumLaude = 0;
for(i=0; i < grades.length ; i++){
    if(grades[i] >= 8) {
        amountOfStudentsCumLaude = amountOfStudentsCumLaude + 1;
    }
}
console.log(amountOfStudentsCumLaude);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//Definieer functie
//Declareer local variable amountOfStudentsCumLaude
//Voeg parameter toe: gradesArray
//Loop door de array heen
//Check of de uitkomst gelijk aan of hoger dan 8 is
//Verhoog amountOfStudentsCumLaude met 1 als dit waar is
//Geef de waarde van amountOfStudentsCumLaude terug
//Log de output voor de gebruiker
const cumLaude = (gradesArray) => {
    let amountOfStudentsCumLaude = 0;
    for(i=0; i < gradesArray.length ; i++){
        if(gradesArray[i] >= 8) {
            amountOfStudentsCumLaude = amountOfStudentsCumLaude + 1;
        }
    }
    return amountOfStudentsCumLaude;
}
const outcome1 = cumLaude(grades);
console.log(outcome1);
const outcome2 = cumLaude([6,4,5]);
console.log(outcome2);
const outcome3 = cumLaude([8,9,4,6,10]);
console.log(outcome3);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
//Declareer variable sumGrades om de uitkomst in op te slaan
//Maak een loop die door de array loopt
//Bij elke loop sla het cijfer op in de sumGrades door deze erbij op te tellen
//Bereken het gemiddelde door de formule sumGrades / array.length toe te passen
//Log de uitkomst in de console
let sumGrades = 0;
for(i=0; i < grades.length; i++) {
    sumGrades = sumGrades + grades[i];
}
console.log(sumGrades / grades.length);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
//Definieer functie
//Voeg parameter gradesArray toe
//Declareer local variable sumGrades
//Loop door de array heen
//Bij elke loop sla het cijfer op in de sumGrades door deze erbij op te tellen
//Bereken het gemiddelde door de formule sumGrades / array.length toe te passen
//Geef de uitkomst terug
//Log de uitkomst in de console
const averageGrade = (gradesArray) => {
    let sumGrades = 0;
    for(i=0; i < gradesArray.length; i++) {
        sumGrades = sumGrades + gradesArray[i];
    }
    return sumGrades / grades.length;
}
const outcome4 = averageGrade(grades);
console.log(outcome4);
const outcome5 = averageGrade([6,4,5]);
console.log(outcome5);
const outcome6 = averageGrade([8,9,4,5,10]);
console.log(outcome6);
/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
//Declareer variable
//Rond uitkomst af op 2 decimalen en wijs dit toe aan de variable
//Log de waarde van de variable rounded
const outcomeAverageGradeRounded = Math.round(outcome4 * 100) / 100;
console.log(outcomeAverageGradeRounded);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
