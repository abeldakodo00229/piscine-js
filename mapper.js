function map(array, func) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(func(array[i], i, array));
    }
    return res
}

function flatMap(array, func) {
    return array.reduce(
        (acc, val, i, array) => acc.concat(func(val, i, array)),
        []
    )
}
