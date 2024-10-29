
function filterEntries(obj, val) {
    let result = {};
    for (let key in obj) {
        if (val([key, obj[key]])) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapEntries(obj, val) {
    let result = {};
    for (let key in obj) {
        result[key] = val([key, obj[key]]);
    }

    let res = {};
    for (let key in result) {
        res[result[key][0]] = result[key][1];
    }
    return res;
    
}

function reduceEntries(obj, reducer, initialValue) {
    let acc = initialValue;
    for (let key in obj) {
        acc = reducer(acc, [key, obj[key]]);
    }
    return acc;
}

function totalCalories(obj){
    return (
        reduceEntries(obj,(acc, curr) => {
                return (nutritionDB[curr[0]]["calories"]  * curr[1]/100) + acc ;
            }
            
        ).toFixed(1)
    );
}
function lowCarbs(obj){

    return filterEntries(obj, (res) => {
        return parseInt(nutritionDB[res[0]]["carbs"]  * res[1]/ 100) < 50;});
}
    
function cartTotal(obj){
    let res = {}
    for (let key in obj) {
        res[key] = {}
        for (let ndbKey in nutritionDB[key]) {
            res[key][ndbKey] =
                Math.round(
                    (obj[key] / 100) * nutritionDB[key][ndbKey] 
                ) ;
        }
    }
    return res
}

// // small database with nutrition facts, per 100 grams
// // prettier-ignore
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))