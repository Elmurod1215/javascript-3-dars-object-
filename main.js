const programmer={
    name:'Elmurod',
    age: 20,
    adress:{
        country:'Uzbekistan',
        city:'Angren',
        house:41
    } 
    
}
console.log(programmer)
console.log(programmer.name)
console.log("")
console.log(typeof programmer)
console.log("")
console.log(programmer.adress)
console.log(programmer.adress.city)

console.log("")
console.log("")
console.log("")


let dasturchi={
    ism:"Elmurod",
    yoshi:20,
    axborot: function(){
        console.log('Salom !!!')
    }
}
console.log(dasturchi.axborot())
dasturchi.axborot()

console.log("")
console.log("")
console.log("")

let dasturchilar={
    ism:"Elmurod",
    yoshi:20,
    axborot: function(){
        console.log('Salom mening ismim '+this.ism)
    }
}
dasturchilar.axborot()
console.log("")
console.log(Object.keys(dasturchilar))
console.log("")
console.log(Object.values(dasturchilar))
console.log("")
console.log(Object.entries(dasturchilar))