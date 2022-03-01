<template>
    <div id="header">Roman Numeral Converter</div>
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
    font-size: calc(var(--base-font-size) * 2);
    width: calc(100% - 2 * var(--paddingW));
    text-align: center;
    -webkit-text-stroke: 0.1rem var(--text-color);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(242, 247, 249, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
