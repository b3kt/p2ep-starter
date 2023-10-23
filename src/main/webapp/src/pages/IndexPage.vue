<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <h4 class="full-width text-center text-primary">Selamat Datang <span class="text-capitalize">{{ session.userData.name }}</span> di platform</h4>
      <div>
        <q-img alt="icon" class="img-icon" src="~assets/p2ep-logo.svg"/>
      </div>
      <h4 class="full-width text-center text-primary text-bold">Selamat Datang <span class="text-capitalize">{{ session.userData.name }}</span> di platform</h4>
    </div>
    <AppCategoryTile :data="categories"/>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";
import AppCategoryTile from "components/AppCategoryTile.vue";
import { useCategoryStore } from "stores/category-store";

export default defineComponent({
  name: 'IndexPage',
  components:{
    AppCategoryTile
  },
  data() {
    return {
      session: useUserStore(),
      categories: useCategoryStore().getCategories
    }
  },
  mounted() {
    useCategoryStore().fetchCategories(this)
  }
})
</script>

<style>
.img-icon{
  max-height: 100px;
}
</style>
