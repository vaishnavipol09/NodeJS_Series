const EventEmitter = require ("events");
const event = new EventEmitter();

//Example 1:
//event.on("sayMyName" , ()=>{
 //   console.log("Your name is vaishnavi");
//})


//Example 2:
//event.on("sayMyName" , ()=>{
//    console.log("Your name is sana");
//})
//event.on("sayMyName" , ()=>{
//    console.log("Your name is rasika");
//})
//event.on("sayMyName" , ()=>{
//    console.log("Your name is yukta");
//})



//Example 3:
event.on("checkPage" , (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage" , 200, "ok");



