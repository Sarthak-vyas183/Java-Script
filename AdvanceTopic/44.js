const chai = {
    name : 'masala Tea',
    isTesty : true,
    location : 'bhopal'
}

// for(let [key , value] of chai) {
//    // console.log(`${key} : ${value}`)
// } //error that you face chai is not iteratable : 

for(let [key , value] of Object.entries(chai)) {
     console.log(`${key} : ${value}`)
}        // if we use this than we will face a problem jise kahate hai -- code fat gaya
        // or ye problem tab aayegi jab object me koi function hoga :
// eg : 

  const tea = {
    name : "Taj",
    istesty : true,
    location : 'indore',
    about : function() {
        console.log("i have 10+ experience in making tea");
    }
  }
  for(let [key , value] of Object.entries(tea)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`)
    }
      
  }