export const arabicToRoman = (arabic) => {
    let result = "";
    //console.log(arabic);
    let romanValues = {
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

    for (let values in romanValues) {
        while (arabic >= romanValues[values]) {
            result += values;
            arabic -= romanValues[values];
        }
    }
    return result;
};

arabicToRoman();

const romanToArabic = (roman) => {
    let arabicNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let arabicValue = 0;

    for (let i = 0; i < roman.length; i++) {
        const numeral = arabicNumbers[roman[i]];
        const numeralNext = arabicNumbers[roman[i + 1]];
        console.log(numeral, numeralNext);

        if (numeral < numeralNext) {
            arabicValue += numeralNext - numeral;
            i++;
        } else {
            arabicValue += numeral;
        }
    }

    return arabicValue;
};

romanToArabic();
