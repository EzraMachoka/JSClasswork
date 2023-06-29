books = [
    {
        title:'Eloquent Javascript',
        price:10.00,
        inventory: 10
    }, 


    {
        title:'Javascript & JQuerry',
        price:45.59,
        inventory: 2
    },

    {
        title:'Javascript ; The good Parts',
        price:36.05,
        inventory:8
    },

    {
        title:'JavaScript: The Defenitive Guide',
        price:25.99,
        inventory:0
    },

    {
        title:'You Dont Know JS',
        price:6.25,
        inventory:7
    },

]




// //returns an array of titles

// function loopAndUpdate(array,updaterFoo){
//     const updatedArray = [];
//     for(let item of array){
//         // console.log(array)
//         // console.log(updatedArray)
//         updatedArray.push(updaterFoo(item))
//     }
//     return updatedArray
// };

// //returns an array of titles
// function titles(item){
//     return item.title
// }
// //returns an arry of prices
// function prices(item){
//     return item.price
// } 
// //returns an array of inventory
// function inventory(item){
//     return item.inventory
// }



// //returns an array of book prices with 50% off(but screws with the prices of the original array as well)
// function halfOff(item){
//     item.price = Math.floor(item.price/2)
//     return item
// }



//returns an array of book prices with 50% off
function halfOff(item){
        let itemCopy = Object.assign({},item) //creates a copy of the original array
        itemCopy.price=Math.floor(itemCopy.price/2)
        return itemCopy
    }


    //Loops through inventory
    //find the first object whose condition returns true based on the call bacvk function
    function loopThroughAndFind (inventory, finder){
        let result = null
        for (let item of inventory){
             if (finder(item) === true){
                result = item
                break
             }
        }
        return result
    
    }

    //will find a given book
    function isBook(book){
        return book.title === 'JavaScript: The Defenitive Guide'
    }

    //Returns item that needs to be stocked first

    function stockFirst(item){
        return item.inventory < 3
    }


const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    let total = item.price * item.inventory
    accumulator+= total
}

let total = books.reduce(reducer, 0)