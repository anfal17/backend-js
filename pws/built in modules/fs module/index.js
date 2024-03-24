const fs = require("fs");

console.log("Read start");

// //Asynchronous way read file
// fs.readFile('./index.txt',function(err,data){
//     if(err){
//         console.log('Error: ',err)
//         return err
//     }
//     console.log('Data: ',data.toString())
//     console.log('Read End')
//     return data
// })

// console.log("Other Stuff")

//Synchronous way to read data
// var data = fs.readFileSync('index.txt')
// console.log('Data : ', data.toString())
// console.log("Read End")
// console.log('Other Stuff')

fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    console.log("Error in opening file: ", err);
  }
  console.log("File open succesfully")

  fs.read(fd, buf, 0, buf.length, 0, function(er, data)){
    if(err){
        console.log("Error : ", er)
    }
    console.log('')
  }
});
