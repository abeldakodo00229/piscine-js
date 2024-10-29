
function filterValues(obj, val) {
    let result = {};
    for (let key in obj) {
        if (val(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapValues(obj, val) {
    let result = {};
    for (let key in obj) {
        result[key] = val(obj[key]);
    }
    return result;
}

function reduceValues(obj, val, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = val(acc, obj[key]);
    }
    return acc;
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// // output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// // output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// // output: 37