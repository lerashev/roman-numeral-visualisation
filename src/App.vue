<template>
    <div id="container">
        <Header />
        <Converter />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Converter from "./components/Converter/Converter.vue";

export default {
    name: "App",
    components: {
        Header,
        Converter,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap");

body,
html {
    margin: 0%;
    padding: 0%;
}
body,
button,
input {
    font-family: Gideon Roman, sans-serif;
}
#app {
    --base-font-size: clamp(1vw, 1.5rem, 5vh);
    --text-color: rgba(53, 28, 28, 1);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-size: cover;
    background: rgb(192, 192, 192);
    color: var(--text-color);
}
#container {
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
}
</style>
