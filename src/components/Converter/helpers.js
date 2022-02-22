export const arabicToRoman = (arabicInput) => {
    let romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanOutput = "";

    for (let romanSymbol in romanSymbols) {
        const arabicValue = romanSymbols[romanSymbol];
        while (arabicInput >= arabicValue) {
            romanOutput += romanSymbol;
            arabicInput -= romanSymbols[romanSymbol];
        }
    }
    return romanOutput;
};

export const romanToArabic = (romanInput) => {
    let arabicNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arabicOutput = 0;

    for (let i = 0; i < romanInput.length; i++) {
        const char = romanInput[i];
        const charNext = romanInput[i + 1];
        const numeral = arabicNumbers[char];
        const numeralNext = arabicNumbers[charNext];

        if (numeral < numeralNext) {
            arabicOutput += numeralNext - numeral;
            i++;
        } else {
            arabicOutput += numeral;
        }
    }

    return arabicOutput;
};
