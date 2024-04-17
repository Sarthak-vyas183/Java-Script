// forof loop 

let arr = [2,6,9,8,7,6,3,4];
let stu = ["sarthak" , 231058 , "bhopal" , true]

for(const num of arr){
   // console.log(num)
}

for(const info of stu) {
   // console.log(info)
}

const statement = "shree radha"
for(const greet of statement) {
    //console.log(`each char of ${greet}`)
}


// map take unique value 
const map = new Map();
map.set('in','india')
map.set('US' , "unitate state")
map.set('canada' , "europe")
map.set ('in' , "india")
//console.log(map)
// apply loop on this map 
for (const key of map) {
   // console.log(key)
}

for (const [key , value] of map) {
     // console.log(key , ':-' , value)
}

//forof loops are not for object so we use forin loop to iterate on object
const myobj = {
   name : "sarthak",
   age : 22 ,
   Qualification : "MCA" , 
} 
for (const key in myobj) {
 // console.log(key , myobj[key])
}


const programming = ['java' , 'py' , "js" , "c#" , "typescript"];
 
for (const key in programming) {
   //console.log(programming[key])         // solve by for in loop
}                                          // forin loop gives index 

for (const key of programming) {
   // console.log(key)                     // same que solve by forof loop
}

// foreach function 
// foreach( callbackfunction )
  const coding = ['c++' , 'java' , "py" , 'js'];

coding.forEach(  (item)=> {
   //console.log(`this is the programming language : ${item}`)
});

// foreach function uske pass thin argument hote hai : value(array ke indexes per jo value hoti hai vo) , index , and pura array hota hai
coding.forEach( (item , index , coding)=> {
   // console.log(`${item} and its index : ${index} it is belong form this array : ${coding}`)
});

const college = [
    {
       collegeName : 'NIT',
       package : '20lPA',
       course : "MCA"
    },
    {
       collegeName : 'LNCT',
        package : '8lPA',
        course : "MCA"
    },
    {
       collegeName : 'SGSIT',
        package : '12lPA',
        course : "MCA"
    },
    {
       collegeName : 'SAGE',
        package : '5lPA',
        course : "MCA"
    },
] 

college.forEach( (item)=>{
   // console.log(`Name of college ${item.collegeName} : package : ${item.package} of course ${item.course}`)
} )