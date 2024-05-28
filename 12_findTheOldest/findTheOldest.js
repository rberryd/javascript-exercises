const findTheOldest = function(people) {
    for(const person of people) {
        if(!person.yearOfDeath) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    }

    people.sort((a,b) => b.age-a.age);

    return people[0];
}

// Do not edit below this line
module.exports = findTheOldest;
