<template>
  <div class="top" >
    <div class="topLeft"></div>
    <div class="topRight">
      <span></span>
      <input type="text">
    </div>
  </div>
</template>

<script>


export default {
  name: "top",
  components: {
  },
 
}
</script>
<style>
  .top{
    width: 100%;
    height:0.4rem;
    /* background-color: #e5383b; */
    background-color: rgba(0, 0, 0, 0);
    /* max-height: 1.92rem; */
    position: fixed ;
    top: 0;
    z-index:10;
    display: flex;
    /* opacity:0.87; */
    justify-content: space-around;
    align-items:center;
    line-height: 0.8rem;
    /* background: -webkit-linear-gradient(top,rgba(0,0,0,0.7),rgba(0,0,0,0)); */

    /* transform:translateZ(0); */

  }
  .topLeft{
    width: 0.57rem;
    height: 0.27rem;
    background-image: url("../../../public/img/top.png") ;
    background-size: 2rem 0.73rem;
  }
  .topRight{
    width: 2.89rem;
    height: 0.27rem;
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: space-around;
    border-radius: 0.03rem;
  }
  .topRight>span{
    display: inline-block;
    width: 0.14rem;
    height: 0.14rem;
    background-image: url("../../../public/img/top.png");
    background-position: -0.72rem 0;
    background-size:2.2rem 0.8rem;
  }
  .topRight input{
    width: 2.5rem;
    height: 0.27rem;
    display: block;
    border: none;
    outline: none;
  }
</style>
