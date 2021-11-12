<template>
    <div>
        User.vue
    </div>
</template>

<script>
export default {
    created(){
        this.$watch(()=>{
            this.$route.params,
            (toParams,previousParams)=>{
                //对路由变化做出响应
                console.log(toParams);
                console.log(previousParams);
            }
        })
    }
}
</script>