let studentscores ={
    'suhaib': 100,
    'm': 80,
    'k': 70
}


const method  = Object.entries(studentscores).forEach(element => {
    console.log(`name: ${element[0]} grade ${element[1]}`)
});
