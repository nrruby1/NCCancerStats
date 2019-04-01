/**
 * A class that contains standard data for reuse throughout the application.
 */
export class Constraints {
    constructor(){}

    COUNTIES_CONST: number = 0;
    YEARS_CONST: number = 1;
    TYPES_CONST: number = 2;

    yearsNum: number = 5;
    typesNum: number = 2;
    countiesNum: number = 100;

    years = [
        {id: 1, name: '2010'},
        {id: 2, name: '2011'},
        {id: 3, name: '2012'},
        {id: 4, name: '2013'},
        {id: 5, name: '2014'}
    ];

    types = [
        {id: 1, name: 'Cancer'},
        {id: 2, name: 'Vital'}
    ];

    counties = [
        {id: 1, name: 'Alamance'},
        {id: 2, name: 'Alexander'},
        {id: 3, name: 'Alleghany'},
        {id: 4, name: 'Anson'},
        {id: 5, name: 'Ashe'},
        {id: 6, name: 'Avery'},
        {id: 7, name: 'Beaufort'},
        {id: 8, name: 'Bertie'},
        {id: 9, name: 'Bladen'},
        {id: 10, name: 'Brunswick'},
        {id: 11, name: 'Buncombe'},
        {id: 12, name: 'Burke'},
        {id: 13, name: 'Cabarrus'},
        {id: 14, name: 'Caldwell'},
        {id: 15, name: 'Camden'},
        {id: 16, name: 'Carteret'},
        {id: 17, name: 'Caswell'},
        {id: 18, name: 'Catawba'},
        {id: 19, name: 'Chatham'},
        {id: 20, name: 'Cherokee'},
        {id: 21, name: 'Chowan'},
        {id: 22, name: 'Clay'},
        {id: 23, name: 'Cleveland'},
        {id: 24, name: 'Columbus'},
        {id: 25, name: 'Craven'},
        {id: 26, name: 'Cumberland'},
        {id: 27, name: 'Currituck'},
        {id: 28, name: 'Dare'},
        {id: 29, name: 'Davidson'},
        {id: 30, name: 'Davie'},
        {id: 31, name: 'Duplin'},
        {id: 32, name: 'Durham'},
        {id: 33, name: 'Edgecombe'},
        {id: 34, name: 'Forsyth'},
        {id: 35, name: 'Franklin'},
        {id: 36, name: 'Gaston'},
        {id: 37, name: 'Gates'},
        {id: 38, name: 'Graham'},
        {id: 39, name: 'Granville'},
        {id: 40, name: 'Greene'},
        {id: 41, name: 'Guilford'},
        {id: 42, name: 'Halifax'},
        {id: 43, name: 'Harnett'},
        {id: 44, name: 'Haywood'},
        {id: 45, name: 'Henderson'},
        {id: 46, name: 'Hertford'},
        {id: 47, name: 'Hoke'},
        {id: 48, name: 'Hyde'},
        {id: 49, name: 'Iredell'},
        {id: 50, name: 'Jackson'},
        {id: 51, name: 'Johnston'},
        {id: 52, name: 'Jones'},
        {id: 53, name: 'Lee'},
        {id: 54, name: 'Lenoir'},
        {id: 55, name: 'Lincoln'},
        {id: 56, name: 'McDowell'},
        {id: 57, name: 'Macon'},
        {id: 58, name: 'Madison'},
        {id: 59, name: 'Martin'},
        {id: 60, name: 'Mecklenburg'},
        {id: 61, name: 'Mitchell'},
        {id: 62, name: 'Montgomery'},
        {id: 63, name: 'Moore'},
        {id: 64, name: 'Nash'},
        {id: 65, name: 'New Hanover'},
        {id: 66, name: 'Northampton'},
        {id: 67, name: 'Onslow'},
        {id: 68, name: 'Orange'},
        {id: 69, name: 'Pamlico'},
        {id: 70, name: 'Pasquotank'},
        {id: 71, name: 'Pender'},
        {id: 72, name: 'Perquimans'},
        {id: 73, name: 'Person'},
        {id: 74, name: 'Pitt'},
        {id: 75, name: 'Polk'},
        {id: 76, name: 'Randolph'},
        {id: 77, name: 'Richmond'},
        {id: 78, name: 'Robeson'},
        {id: 79, name: 'Rockingham'},
        {id: 80, name: 'Rowan'},
        {id: 81, name: 'Rutherford'},
        {id: 82, name: 'Sampson'},
        {id: 83, name: 'Scotland'},
        {id: 84, name: 'Stanly'},
        {id: 85, name: 'Stokes'},
        {id: 86, name: 'Surry'},
        {id: 87, name: 'Swain'},
        {id: 88, name: 'Transylvania'},
        {id: 89, name: 'Tyrrell'},
        {id: 90, name: 'Union'},
        {id: 91, name: 'Vance'},
        {id: 92, name: 'Wake'},
        {id: 93, name: 'Warren'},
        {id: 94, name: 'Washington'},
        {id: 95, name: 'Watauga'},
        {id: 96, name: 'Wayne'},
        {id: 97, name: 'Wilkes'},
        {id: 98, name: 'Wilson'},
        {id: 99, name: 'Yadkin'},
        {id: 100, name: 'Yancey'}
    ];
}