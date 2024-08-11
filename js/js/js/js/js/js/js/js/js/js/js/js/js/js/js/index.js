function matchHouses(step) {
    if (step === 0) {
        return 0;
    }
    return 5 * step + 1;
}

// Examples
console.log(matchHouses(1));  // ➞ 6
console.log(matchHouses(4));  // ➞ 21
console.log(matchHouses(87)); // ➞ 436
