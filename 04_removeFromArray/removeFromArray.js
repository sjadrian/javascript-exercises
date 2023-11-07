const removeFromArray = function(array, ...args) {

    // my solution
    for (let j = 0; j < args.length; j++) {
        for (let i = 0; i < array.length; i++) {
   
            if (array[i] === args[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;


    // simple solution
    // const newArray = [];
    // // use forEach to go through the array
    // array.forEach((item) => {
    //   // push every element into the new array
    //   // UNLESS it is included in the function arguments
    //   // so we create a new array with every item, except those that should be removed
    //   if (!args.includes(item)) {
    //     newArray.push(item);
    //   }
    // });
    // // and return that array
    // return newArray;

    // A simpler, but more advanced way to do it is to use the 'filter' function,
    // which basically does what we did with the forEach above.
    // return array.filter(val => !args.includes(val));
    
};

// Do not edit below this line
module.exports = removeFromArray;
