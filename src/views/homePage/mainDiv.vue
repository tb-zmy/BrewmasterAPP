<template>
    <div class="mainDiv">
        <Plant/>
        <NavDiv/>
        <Art/>
    </div>
</template>
<script>
import Plant from "./plant"
import NavDiv from "./navDiv"
import Art from "./art"
export default {
    name:"mainDiv",
    components:{
        Plant,
        NavDiv,
        Art,
    }
}
</script>

<style>
    .mainDiv{
        width: 100%;
        height: auto;
        background-color: red;
        position: absolute !important;
        top:0;
        bottom: 0.42rem;
        overflow-y: auto;
    }
</style>
