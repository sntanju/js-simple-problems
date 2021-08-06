const business = 450;
const minister = 350;
const army = 600;

// if(business > minister){
//     console.log('busness is biger than minister');
// }
// else{
//     console.log('minister is biger than business');
// }

// function findLargest(first, second){
//     if(first > second){
//         return first;
//     }
//     else{
//         return second;
//     }
// }

// const largest = findLargest(354, 241);
// console.log('largest is ', largest);

//compare 3
// if(business > minister && business > army){
//     console.log('busness is biger');
// }
// else if(minister > business && minister > army){
//     console.log('minister is biger')
// }
// else{
//     console.log('army is biger');
// }

var max = Math.max(business, minister, army);
//console.log('largest is', max)

//task 1 . find the largest number of three number with a function
function findLargest(first, second,third){
         if(first > second && first > third){
            return first;
         }
         else if(second > first && second > third){
             return second;
         }
         else{
             return third;
        }
     }
    
     const largest = findLargest(354, 241, 473);
     console.log('largest is ', largest);
    
//task 1 . find the smallest number of three number with a function
function findSmallest(first, second,third){
    if(first < second && first < third){
       return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
   }
}

const smallest = findSmallest(354, 241, 473);
console.log('smallest is ', smallest);
