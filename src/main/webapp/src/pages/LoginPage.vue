<template>
  <q-page padding class="bg-secondary flex flex-center">
    <q-card
      class="my-card q-pa-lg"
    >
      <q-card-section horizontal class="row  justify-between items-start content-start">
        <q-card-section>
          Welcome to
          <h4 class="text-weight-bold qa-none q-my-none">Sign in</h4>
        </q-card-section>
        <q-card-section>
          <img
            alt="Quasar logo"
            src="~assets/logo.svg"
          >
        </q-card-section>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md" style="max-width: 400px">

          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <div>Enter your username or email address</div>
            <q-input
              dense
              outlined
              v-model="form.username"
              label="Username or email address"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <div>Enter your password</div>
            <q-input
              dense outlined
              type="password"
              v-model="form.password"
              label="Password"
              lazy-rules
              :rules="[
                  val => val !== null && val !== '' || 'Please type your password'
                ]"
            />
            <div>
              <q-btn label="Sign in" type="submit" color="blue-7" class="full-width"/>
            </div>
          </q-form>

        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { useUserStore } from '../stores/user-store'
import { watch } from 'vue';

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      useUserStore().login(this.form.username, this.form.password, this);
    }
  },
  mounted() {
    const store = useUserStore();
    if(store.accessToken !== null && store.userData !== null){
      this.$router.push("/")
    }
  }
}
</script>

<style>
.my-card {
  width: 480px;
  height: 540px;
  border-radius: 2em;
}

.q-btn--rectangle {
  border-radius: 8px;
}
</style>
