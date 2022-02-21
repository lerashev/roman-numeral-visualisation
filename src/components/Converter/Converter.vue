<template>
    <div id="converter">
        <input :class="['input', 'arabic', !numArabic ? 'error' : '']" v-model="numArabic" @input="handleInputArabic($event)" type="number" min="1" step="1" />
        <button class="button-convert">CONVERT</button>
        <input :class="['input', 'roman', !numRoman ? 'error' : '']" v-model="numRoman" @input="handleInputRoman($event)" type="text" />
        <!-- v-for line in romanBreakdown <div> letter : meaning -->
    </div>
</template>

<script>
export default {
    name: "Converter",
    data() {
        return {
            numArabic: 12,
            numRoman: "XII",
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
            this.numArabic = value;
            // convert to roman
        },
        handleInputRoman(event) {
            let value = event.target.value;
            // validate input
            this.numRoman = value;
            // convert to arabic
        },
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
    background: #ffcd38;
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
</style>
