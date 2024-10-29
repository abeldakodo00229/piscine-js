
function filterKeys(obj, keyf) {
    let result = {};
    for (let key in obj) {
        if (keyf(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapKeys(obj, keyf) {
    let result = {};
    for (let key in obj) {
        result[keyf(key)] = (obj[key]);
    }
    return result;
}

function reduceKeys(obj, keyf, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return keyf(acc, curr, initialValue);
    }, initialValue);
    
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}


// //const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// const  nutrients = { vinegar : 12, sugar : 1, oil : 33, onion : 27, garlic : 29, paprika : 44}

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// //output: carbohydrates, protein, fat

