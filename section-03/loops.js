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

//*******************Map and filter function***************************** */
const Arr = [9,116,300,0,1,555,9,182,2,]

const ans = Arr.filter( (num)=>{
     return num < 100
} )
//console.log(ans)


const newArr = []
for(let i=0; i<Arr.length; i++) {
    if(Arr[i] < 100) {
       newArr.push(Arr[i]) 
    }
 }
//console.log(newArr)

const books = [
  { title: 'Book One', genre: 'Fantasy', publish: 2020, edition: 1 },
  { title: 'Book Two', genre: 'Science Fiction', publish: 2018, edition: 2 },
  { title: 'Book Three', genre: 'Mystery', publish: 2015, edition: 3 },
  { title: 'Book Four', genre: 'Historical Fiction', publish: 2019, edition: 1 },
  { title: 'Book Five', genre: 'Thriller', publish: 2021, edition: 2 },
  { title: 'Book Six', genre: 'Romance', publish: 2017, edition: 4 },
  { title: 'Book Seven', genre: 'Non-fiction', publish: 2016, edition: 1 },
  { title: 'Book Eight', genre: 'Horror', publish: 2022, edition: 1 },
  { title: 'Book Nine', genre: 'Adventure', publish: 2014, edition: 2 },
  { title: 'Book Ten', genre: 'Dystopian', publish: 2023, edition: 1 },
];
 


// filter function applied on object array 
const result = books.filter( (book)=>{
       return book.title === "Book One";
})  



//map function are applied on object's array 
const booktitle = books.map( (book)=>{
    return book.genre;
} )
//console.log(booktitle)

//console.log(result)

//*********************Add ten in every number ********************************************/

const age = [1,2,3,4,5,6,7,8,9,10]
const newage = age.map( (val)=>{
      // console.log(val +10)
      return val + 10;
} )
//console.log(newage) 

//***********************intersting reduce function************************************** */
const item = [1,2,3,4,5]
const total = item.reduce(  function(accumulator , currentvalue) {
    //console.log(`accumulator : ${accumulator} and currentvlaue : ${currentvalue}`)
    return accumulator + currentvalue;
},0)
//console.log(total)


const shopingcart  = [
    {
        name : "js course",
        price : 2999
    },
    {
        name : "python course",
        price : 999
    },
    {
        name : "mobile dev course",
        price : 9999
    },
    {
        name : "java DSA course",
        price : 4999
    },
    {
        name : "data science course",
        price : 12999
    },
    {
        name : "React Native course",
        price : 8999
    },
]

const totalPrice = shopingcart.reduce( (accumulator , currentvalue) => {
        //console.log(`accumulator : ${accumulator} and currentvlaue : ${currentvalue.price}`)
           return accumulator + currentvalue.price;
} ,0 )

//console.log(totalPrice)

