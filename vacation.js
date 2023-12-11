// It's festive season, I'm writing a function that generates random vacation location for users.


function generateRandomVacationLocation(userDestinations) {
    if (userDestinations && userDestinations.Length > 0 ) {
        const randomIndex = Math.floor(Math.random() * userDestinations.length);
        return userDestinations [randomIndex];
    }
    else {
        const defaultDestinations = ['Paris', 'Dubai',  'Meldives', 'New York city', 'Greece', 'Sydney', 'Rio de Jaeiro', 'Cape Town', 'Rome']
        const randomIndex = Math.floor(Math.random() * defaultDestinations.length);
        return  defaultDestinations [randomIndex];

    } 
}
const userDestinations = ['London', 'Dublin', 'Amsterdam', 'Manchester'];
console.log(generateRandomVacationLocation(userDestinations));