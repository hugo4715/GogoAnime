<template>
  <div id="page">
    <div class="container">
      <div class="is-flex is-justify-content-center">
        <div class="">
        </div>
        <div class="">
          <div class="box">
            <DownloadLatest/>
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
html, #page{
  width: 100%;
  height: 1000;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
