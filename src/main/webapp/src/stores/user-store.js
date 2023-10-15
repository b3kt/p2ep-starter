import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  persist: {
    storage: sessionStorage,
    paths: ['accessToken','userData'],
  },
  state: () => ({
    accessToken: null,
    userData: null,
  }),
  getters: {
    getAccessToken: (state) => {
      return state.accessToken
    },
    getUserDetail: (state) => state.userData,
  },
  actions: {
    async login(user, pass, _instance) {
      try {
        await _instance.$api.post("/auth/login", { username: user, password: pass })
          .then((response) => {
            if(response.status === 200){
              console.log(response.data);
              this.setUserDetail(response.data.userData);
              this.setAccessToken(response.data.token);
              _instance.$q.notify({message:`Welcome back ${this.userData.name}!`, color:"positive"});
              _instance.$router.push("/");
            }else{
              _instance.$q.notify({message:"failed while trying to login", color:"negative"});
            }
          });
      } catch (error) {
        console.log(error)
        _instance.$q.notify({message:"error", color:"negative"});
        return error
      }
    },
    setAccessToken(token) {
      this.accessToken = token;
    },
    setUserDetail(user) {
      this.userData = user;
    },
  },
});
