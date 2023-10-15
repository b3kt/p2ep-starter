import { boot } from 'quasar/wrappers'
// import { useUserStore } from "stores/user-store";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, store }) => {
  // something to do
  // useUserStore().$subscribe((mutation, state) => {
  //   console.log(mutation)
  //
  //   // import { MutationType } from 'pinia'
  //   mutation.type // 'direct' | 'patch object' | 'patch function'
  //   // same as cartStore.$id
  //   mutation.storeId // 'cart'
  //   // only available with mutation.type === 'patch object'
  //   mutation.payload // patch object passed to cartStore.$patch()
  //
  //   // persist the whole state to the local storage whenever it changes
  //   localStorage.setItem('cart', JSON.stringify(state))
  // })


  // console.log(useUserStore().userData)

})
