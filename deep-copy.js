function deepCopy(input) {
    if (Array.isArray(input)) {
       let output = []
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i])
        }
        return output
    } else if (typeof input==="object"  &&  !(input instanceof RegExp)) {
       let output = {}
        for (var key in input) {
            output[key] = deepCopy(input[key])
        }
        return output
    } else {
        return input
    }
}

//console.log(deepCopy([console.log, /hello/]));