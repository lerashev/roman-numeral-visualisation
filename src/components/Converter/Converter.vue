<template>
    <div id="converter">
        <input
            :class="['input', 'arabic', !numArabic ? 'error' : '']"
            v-model="numArabic"
            @input="handleInputArabic($event)"
            type="number"
            min="1"
            step="1"
            ref="arabic"
        />

        <img
            class="image"
            @click="getRandomNumber()"
            src="https://t4.ftcdn.net/jpg/03/05/38/61/360_F_305386149_Vua0CUMffWVrWqehdR91jur6CY3E4xmP.jpg"
            alt=""
        />

        <input
            :class="['input', 'roman', !numRoman ? 'error' : '']"
            v-model="numRoman"
            @input="handleInputRoman($event)"
            type="text"
            ref="roman"
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
            numArabic: 0,
            numRoman: "",
            numRomanBreakdown: [],
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
            const { romanOutput, romanBreakdown } = arabicToRoman(value);
            this.numRoman = romanOutput;
            this.numRomanBreakdown = romanBreakdown;
        },
        handleInputRoman(event) {
            let value = event.target.value
                .toUpperCase()
                .replace(/[^IVXLCDM]+/g, "");
            // convert to arabic
            this.numRoman = value;
            const { arabicOutput, romanBreakdown } = romanToArabic(value);
            this.numArabic = arabicOutput;
            this.numRomanBreakdown = romanBreakdown;
        },
        getRandomNumber() {
            const randomArabic = Math.floor(Math.random() * 1000);
            this.handleInputArabic({ target: { value: randomArabic } });
        },
    },
    mounted() {
        this.handleInputArabic({ target: { value: 2022 } });
        this.$refs.roman.focus();
    },
};
</script>

<style scoped>
#converter {
    --bg-color: rgba(242, 247, 249, 0.8);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    align-self: start;
    margin-top: 3rem;
}

.input {
    padding: 0.5rem;
    text-align: center;
    background: var(--bg-color);
    border: 1px solid var(--bg-color);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px;
    font-size: calc(var(--base-font-size) * 1.3);
}
.input:focus {
    outline: none;
}
.input.error {
    background: #ffcd387a;
}

img {
    mix-blend-mode: multiply;
    border-radius: 50%;
    width: clamp(40px, 30%, 80px);
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
    font-size: var(--base-font-size);
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
