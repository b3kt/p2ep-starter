import { defineStore } from 'pinia';
import { useUserStore } from "stores/user-store";

export const useCategoryStore = defineStore('category', {
  persist: {
    storage: sessionStorage,
    paths: ['categories'],
  },
  state: () => ({
    categories: [],
  }),
  getters: {
    getCategories: (state) => {
      return state.categories
    }
  },
  actions: {
    async fetchCategories(_instance) {
      try {
        await _instance.$api.get("/resource/categories", {
          headers: {
            Authorization: `Bearer ${useUserStore().getAccessToken}`
          }
        })
          .then((response) => {
            if(response.status === 200){
              this.setCategories(response.data);
            }
          });
      } catch (error) {
        console.log(error)
        _instance.$q.notify({message:"error", color:"negative"});
        return error
      }
    },
    setCategories(categories) {
      this.categories = categories;
    }
  },
});
