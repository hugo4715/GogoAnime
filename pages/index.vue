<template>
  <div id="page">
    <div class="container is-fullheight">
      <div class="is-flex is-justify-content-center is-align-items-center is-fullheight">
        <div class="mx-5 is-hidden-mobile" style="width: 300px;">
          <figure class="image">
            <img src="~/assets/screenshot1.png">
          </figure>
        </div>
        <div class="mx-5">
          <div class="box">
            <h1 class="title">GogoAnime - Unofficial App</h1>
            <h2 class="subtitle">How to install</h2>
            <ol class="mx-4 mb-4">
              <li>Create an account on GogoAnime</li>
              <li>Download and install the APK</li>
              <li>Login using your account and start watching</li>
            </ol>
            <div class="is-flex is-align-items-center is-justify-content-space-between">
              <div class="">
                <DownloadLatest/>
              </div>
              <div class="">
                <a class="button is-success" href="https://github.com/hugo4715/GogoApp/releases">
                  Older versions
                  <b-icon class="mx-1"
                      icon="dots-vertical"
                      size="is-small">
                  </b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
html {
  background: rgb(2,0,36);
  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('~@/assets/background.jpg') no-repeat;
  background-size: cover;
}
html, body, #page, #__nuxt, #__layout, .is-fullheight {
  height: 100%;
}
</style>
