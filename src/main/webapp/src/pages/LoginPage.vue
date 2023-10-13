<template>
  <q-page padding class="bg-secondary flex flex-center">
    <q-card
      class="my-card"
    >
      <q-card-section horizontal class="row  justify-between items-start content-start">
        <q-card-section>
          Welcome to
          <h3 class="text-weight-bold qa-none q-my-none">Sign in</h3>
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
            @reset="onReset"
            class="q-gutter-md"
          >
            <div>Label</div>
            <q-input
              dense
              outlined
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <div>Label</div>
            <q-input
              dense outlined
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>

        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style>
.my-card{
  width: 480px;
  height: 480px;
  border-radius: 2em;
}
</style>
