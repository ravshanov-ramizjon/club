const visitors = prompt('How many people are there? (manager)')
const copacity = 10
const freePlaces = copacity - visitors

const name = prompt('What is your name?')

if(name[0].toLowerCase() === 'a') {
    const age = +prompt('How old are you?')

if(age >= 18 && age <= 40) {
    const cash = +prompt('How much money do u have?')

if(cash >= 100) {
    const people = +prompt('How many people want to come in with you?')
                
if(people <= freePlaces) {
    alert('Welcome to our VIP club!')
} else {
    alert('All seats are booked in our club!')
}

        } else {
            alert('pshol von ' + name)
        }

    } else {
        alert('pshol von ' + name)
    }

} else {
    alert('pshol von ' + name)
}