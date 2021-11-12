<template>
    <div>
        <h1>User.vue</h1>
        <p>你好，我的ID是{{getId}}</p>
    </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        getId(){
            return this.$route.params.userId
        }
    },
    // created(){
    //     this.$watch(()=>{
    //         this.$route.params,
    //         (toParams,previousParams)=>{
    //             //对路由变化做出响应
    //             console.log(toParams);
    //             console.log(previousParams);
    //         }
    //     })
    // }
}
</script>