<template>
  <div>
    <q-toolbar class="bg-white text-primary">
<!--      <q-btn flat round dense icon="menu" class="q-mr-sm"/>-->
      <span class="q-mr-lg">Select Period:</span>
      <q-btn-dropdown flat class="q-mr-sm bg-accent text-primary" label="Dropdown">
        <q-list>
          <q-item-label header>Folders</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
          <q-separator inset spaced/>
          <q-item-label header>Files</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="primary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown flat class="q-mr-sm bg-accent text-primary" label="Dropdown">
        <q-list>
          <q-item-label header>Folders</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
          <q-separator inset spaced/>
          <q-item-label header>Files</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="primary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown flat class="q-mr-sm bg-accent text-primary" label="Dropdown">
        <q-list>
          <q-item-label header>Folders</q-item-label>
          <q-item v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
          <q-separator inset spaced/>
          <q-item-label header>Files</q-item-label>
          <q-item v-for="n in 3" :key="`y.${n}`" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="assignment" color="primary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-space/>
      <q-btn flat label="Trigger Automation" icon="smart_toy" class="q-mr-md"/>
      <q-btn flat label="New Templates" icon="edit_document" class="q-mr-md"/>
      <q-input dense standout v-model="text" input-class="text-right" class="q-mr-md">
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
        </template>
      </q-input>
      <q-btn stretch flat label="Filter" icon="filter_alt" />
    </q-toolbar>
    <div ref="tableau" class="tableau-container"></div>
  </div>
</template>

<script>
export default {
  name: 'AppSubLayout',
  props: {
    title: {
      type: String,
      default: 'content title'
    }
  },
  setup() {
    return {
      msg: 'Hello Tableau Fans!',
      url:"https://10ax.online.tableau.com/t/tableauedobeta/views/POCDashboardPLNEPI/DetailPembangkit",
      options: {
        hideTabs: true
      }
    }
  },
  methods:{
    initViz: function () {
      let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);
    }
  },
  mounted: function () {
    this.initViz()
  }
}
</script>
<style>
.tableau-container iframe{
  width: 100% !important;
  height: 720px !important;
}
</style>
