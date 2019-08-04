<template>
    <div class="haeder">
        <h2>{{title}}</h2> 
    </div>
</template>

<script>

export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"裸价清仓"
        }
    }
}
</script>


<style>
    
</style>
