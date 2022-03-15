<template>
  <div v-if="this.info" class="mx-auto">
      <b-button type="is-success" icon-left="download" @click="downloadLatest">
      {{this.info.name}}
      </b-button>
  </div>
  <div v-else>
      <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios'
import { DialogProgrammatic as Dialog } from 'buefy'

export default {
  name: 'DownloadLatest',
  data () {
    return {
      info: undefined
    }
  },
  mounted () {
    axios.get('https://api.github.com/repos/Konloch/bytecode-viewer/releases/latest')
      .then((response) => {
        this.info = response.data
        console.log(this.info)
      }).catch((err) => {
        Dialog.alert({
          message: 'Could not get the latest release from Github<br/> ' + err,
          type: 'is-danger'
        })
      })
  },
  methods: {
    downloadLatest () {
      window.open(this.info.assets[0].browser_download_url)
    }
  }
}
</script>
