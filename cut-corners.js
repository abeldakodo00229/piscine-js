function round(number) {
    let bool = false;
    if (number < 0) {
        bool = true;
        number = -number;
    }
    let counter = 0;
    while (!(number < 1 && number > -1)) {
        number -= 1;
        counter++;
    }
    if (number < 0.5) {
        if (bool) {
            return -counter;
        } else {
            return counter;
        }
    } else {
        if (bool) {
            return -counter - 1;
        } else {
            return counter + 1;
        }
    }
}

function floor(number) {
    let bool = false;
    if (number < 0) {
        bool = true;
        number = -number;
    }
    let numberCopy = number;
    let counter = 0;
    while (!(numberCopy < 1 && numberCopy > -1)) {
        numberCopy -= 1;
        counter++;
    }
    if (bool) {
        return -counter - 1;
    } else {
        return counter;
    }
}

function ceil(number) {
    if (!number) return 0;
    let bool = false;
    if (number < 0) {
        bool = true;
        number = -number;
    }
    let numberCopy = number;
    let counter = 0;
    while (!(numberCopy < 1 && numberCopy >= 0)) {
        numberCopy -= 1;
        counter++;
    }
    if (bool) {
        return -counter;
    } else {
        return counter + 1;
    }
}

function trunc(number) {
    let counter = 0;
    if (number > 0xfffffffff) {
        number -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let bool = false;
    if (number < 0) {
        bool = true;
        number = -number;
    }
    let numberCopy = number;
    while (!(numberCopy < 1 && numberCopy > -1)) {
        numberCopy -= 1;
        counter++;
    }
    if (bool) {
        return -counter;
    }
    return counter;
}