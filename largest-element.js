// function largestElement(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if (element > largest){
//             largest = element;

//         }
//     }
//     return largest;
// }

// const ages = [12, 45, 2, 34, 75, 43, 12];
// const oldest = largestElement(ages);
// const oldest2 = largestElement([-12, -5, -17]);
//console.log('oldest2', oldest2);

// find the lowest element of an aarray 
function lowestElement(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element < lowest){
            lowest = element;

        }
    }
    return lowest;
}
const ages = [12, 45, 2, 34, 75, 43, 12];
const smallest = lowestElement(ages);
const smallest2 = lowestElement([-12, -5, -17]);
console.log('smallest2', smallest2);