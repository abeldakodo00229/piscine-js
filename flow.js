function flow(array) {
    return function (...strarray) {
        if (strarray.length > 1) {
            strarray = [array[0](...strarray)];
        }
        return array.reduce((accumulator,  currentValue) =>  currentValue(accumulator), strarray[0]);
    };
    
}