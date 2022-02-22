export const arabicToRoman = (arabicInput) => {
    const romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
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
    const seen = new Set();
    const romanBreakdown = [];

    for (let romanSymbol in romanSymbols) {
        const arabicValue = romanSymbols[romanSymbol];
        while (arabicInput >= arabicValue) {
            romanOutput += romanSymbol;
            arabicInput -= romanSymbols[romanSymbol];
            if (!seen.has(romanSymbol)) {
                seen.add(romanSymbol);
                romanBreakdown.push(
                    `${romanSymbol} : ${romanSymbols[romanSymbol]}`
                );
            }
        }
    }
    return { romanOutput, romanBreakdown };
};

export const romanToArabic = (romanInput) => {
    const arabicNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arabicOutput = 0;
    const seen = new Set();
    const romanBreakdown = [];

    for (let i = 0; i < romanInput.length; i++) {
        const char = romanInput[i];
        const charNext = romanInput[i + 1];
        const numeral = arabicNumbers[char];
        const numeralNext = arabicNumbers[charNext];
        let romanNumeral;
        let arabicValue;

        if (numeral < numeralNext) {
            romanNumeral = char + charNext;
            arabicValue = numeralNext - numeral;
            arabicOutput += arabicValue;
            i++;
        } else {
            romanNumeral = char;
            arabicValue = numeral;
            arabicOutput += arabicValue;
        }
        if (!seen.has(romanNumeral)) {
            seen.add(romanNumeral);
            romanBreakdown.push(`${romanNumeral} : ${arabicValue}`);
        }
    }

    return { arabicOutput, romanBreakdown };
};
