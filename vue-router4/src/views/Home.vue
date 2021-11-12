<template>
  <div>
    <h1>Home.vue</h1>
  </div>
</template>

// <script>
// import { ref} from 'ref'
// import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
// export default {
//   setup() {
//     const router = useRouter();

//     //使用useRoute获取route对象
//     const route = useRoute()

//     const userData = ref()

//     router.push({
//         name:'search',
//         query:{
//             ...route.query
//         }
//     })

//     const fetchUser = ()=>{
//         console.log('发请求获取数据');
//     }

//     onBeforeRouteUpdate(async (to,from) =>{
//         //仅当id更改时才获取用户，例如query或hash值已经更改
//         if(to.params.id !== from.params.id){
//             userData.value = await fetchUser(to.params.id)
//         }
//     })

//   },
// };
//
</script>