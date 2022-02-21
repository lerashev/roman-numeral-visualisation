<template>
    <div id="converter">
        <input class="input arabic" />
        <button class="button-convert">Convert</button>
        <input class="input roman" />
        <!-- v-for line in romanBreakdown <div> letter : meaning -->
    </div>
</template>

<script>
export default {
    name: "Converter",
    props: {},
};
</script>

<style scoped>
#converter {
    --bg-color: rgba(242, 247, 249, 0.8);
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

.input {
    height: 2rem;
    background: var(--bg-color);
    border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px;
}

.button-convert {
    --btn-size: 4.5rem;
    height: var(--btn-size);
    width: var(--btn-size);
    background: var(--bg-color);
    border: 1px solid black;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
}
</style>
