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
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>
