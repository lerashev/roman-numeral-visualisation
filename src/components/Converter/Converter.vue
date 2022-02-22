<template>
    <div id="converter">
        <input
            :class="['input', 'arabic', !numArabic ? 'error' : '']"
            v-model="numArabic"
            @input="handleInputArabic($event)"
            type="number"
            min="1"
            step="1"
        />
        <button class="button-convert">CONVERT</button>
        <input
            :class="['input', 'roman', !numRoman ? 'error' : '']"
            v-model="numRoman"
            @input="handleInputRoman($event)"
            type="text"
        />
        <div class="breakdown-container">
            <div
                class="breakdown-line"
                v-for="line in numRomanBreakdown"
                :key="line"
            >
                <div class="arrow-body"></div>
                <div class="arrow-tip"></div>
                <span>{{ line }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { romanToArabic, arabicToRoman } from "./helpers";

export default {
    name: "Converter",
    data() {
        return {
            numArabic: 12,
            numRoman: "XII",
            numRomanBreakdown: ["X : 10", "III : 3x1"],
        };
    },
    methods: {
        handleInputArabic(event) {
            const min = 1;
            let value = parseInt(event.target.value);
            // validate input
            if (!value || value < min) {
                value = "";
            }
            // convert to roman
            this.numArabic = value;
            this.numRoman = arabicToRoman(value);
        },
        handleInputRoman(event) {
            let value = event.target.value;
            // validate input
            // convert to arabic
            this.numRoman = value;
            this.numArabic = romanToArabic(value);
        },
        arabicToRoman,
        romanToArabic,
    },
};
</script>

<style scoped>
#converter {
    --font-size: ;
    --bg-color: rgba(242, 247, 249, 0.8);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.input {
    padding: 0.5rem;
    text-align: center;
    background: var(--bg-color);
    border: 1px solid var(--bg-color); /* bg-color or text-color */
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px;
    font-size: 20pt;
}
.input:focus {
    outline: none;
}
.input.error {
    background: #ffcd387a;
}

.button-convert {
    --btn-size: 6em;
    height: var(--btn-size);
    width: var(--btn-size);
    background: var(--bg-color);
    border: 1px solid var(--bg-color); /* bg-color or text-color */
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    font-size: 12pt;
    font-weight: bold;
    transition: all 0.2s linear;
}
.button-convert:hover {
    filter: brightness(85%);
    cursor: pointer;
}
.button-convert:active {
    filter: brightness(70%);
    cursor: pointer;
}
.breakdown-container {
    align-self: flex-start;
    padding-left: 2.5rem;
}
.breakdown-line {
    --arrow-width: 3rem;
    --arrow-thickness: 2px;
    --line-thickness: 2px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: 20pt;
}
.breakdown-line::before {
    position: absolute;
    content: "";
    top: -50%;
    height: 100%;
    border-left: var(--line-thickness) solid var(--text-color);
}
.arrow-body {
    background: var(--text-color);
    width: var(--arrow-width);
    height: var(--arrow-thickness);
    margin-right: 0.5rem;
}
.arrow-tip {
    --arrow-tip-thickness: 2px;
    --arrow-tip-size: 5px;
    position: absolute;
    left: calc(var(--arrow-width) - var(--arrow-tip-size) - 2px);
    width: var(--arrow-tip-size);
    height: var(--arrow-tip-size);
    border: solid var(--text-color);
    border-width: 0 var(--arrow-tip-thickness) var(--arrow-tip-thickness) 0;
    transform: rotate(-45deg);
}
</style>
