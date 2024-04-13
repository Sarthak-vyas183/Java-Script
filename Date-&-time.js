//const date = new Date();
// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.toDateString())
// console.log(date.toUTCString())  // The Universal Coordinated Time (UTC) is the time set by the World Time Standard. Note: UTC time is the same as GMT time
// console.log(date.toJSON())
// console.log(date.toTimeString())   //ti gives only time 

//console.log(date.getTimezoneOffset())  // The getTimezoneOffset() method returns the time difference between Universal Coordinated Time (UTC) and local time in minutes. It does not accept any parameters.
// console.log(date.setMonth(4)) 
//console.log(date.toLocaleString())  //The toLocaleString() method is a JavaScript 

// console.log(date.toLocaleDateString())

//console.log(typeof(date))   // date is a object :

//asign new date 
//  const mydate = new Date(2023, 2 ,23);
   //const mydate = new Date("01-14-2023");
   //console.log(mydate.toLocaleString())
  //console.log(mydate.getTime());  // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.    // in java script month start form zero 0;



//****************************Time Stamp******************************* */
// const timeStamp =  Date.now();
// console.log(timeStamp/1000); // divide by 1000 if you need this in minute 

//const newdate = new Date();

// console.log(newdate)
// console.log(newdate.getTime())
// console.log(newdate.getDay())   ///returns the value of day of the week for the specified date on the basis of local time. The value of the day starts with 0 that represents Sunday.
// console.log(newdate.getFullYear())
// console.log(newdate.getHours())
// console.log(newdate.getMonth())
// console.log(newdate.getUTCDate())
// console.log(newdate.getSeconds())

//String interpolation 
// const newdate = new Date();
// console.log(`Today's date is ${newdate.getDate()} and month ${newdate.getMonth()} and ${newdate.getFullYear()} and time ${newdate.getHours()} minute ${newdate.getMinutes()} and seconds are ${newdate.getSeconds()} and miliseconds are ${newdate.getMilliseconds()}` );

// const newdate = new Date();
// const Monthdata = newdate.toLocaleString('default' , {
//     month : "long"

// })
// console.log(`Today's date is ${newdate.getDate()} and month ${Monthdata} and year ${newdate.getFullYear()} and time ${newdate.getHours()} minute ${newdate.getMinutes()} and seconds are ${newdate.getSeconds()} and miliseconds are ${newdate.getMilliseconds()}` );



