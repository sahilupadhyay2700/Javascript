//18th

// function getNestedProperty(){
//     const jsonObj = {
//         	user: {
//         	name: "John",
//             address: {
//             city: "New York"
//             }
//           }
//         }
        

//       return  jsonObj.user.address.city;
//     }


// console.log(getNestedProperty());

//to console in retrun we write 


// function getNestedProperty(){
//     const jsonObj = {
//         	user: {
//         	name: "John",
//             address: {
//             city: "New York"
//             }
//           }
//         }
        

//       const city = jsonObj.user.address.city;
//       return console.log(city)
//     }

//     getNestedProperty();

    // to print all value name , address and city

    
// function getNestedProperty(){
//     const jsonObj = {
//         	user: {
//         	name: "John",
//             address: {
//             city: "New York",
//             street: "87 street"
//             }
//           }
//         }
        
//        const name = jsonObj.user.name;
//        const address = jsonObj.user.address.street;
//       const city = jsonObj.user.address.city;
//       return console.log(name , city , address)
//     }

//     getNestedProperty();

//19th

function updateUserAddress(newcity){
    const person =  {
        name : "john" ,
        address : {
        city: "new york"
        }
    };
    
        person.address.city = newcity;

        const name = person.name; 
        const city = person.address.city;

        console.log(`name : ${name}, city: ${city}`);
        return {name , city};

}

updateUserAddress("los angeles");

//20th



    