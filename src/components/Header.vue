<template>
    <div id="header">Roman Numeral Converter!</div>
</template>

<script>
export default {
    name: "Header",
    props: {},
};
</script>

<style scoped>
#header {
    --paddingW: 1rem;
    --paddingH: 0.5rem;
    padding: var(--paddingH) var(--paddingW);
    font-size: 25pt;
    width: calc(100% - 2 * var(--paddingW));
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
}
</style>
