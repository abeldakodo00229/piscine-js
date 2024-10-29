function currify(func) {
    return function currified(...strarray) {
        return strarray.length >= func.length
            ? func(...strarray)
            : currified.bind(null, ...strarray);
    }
}