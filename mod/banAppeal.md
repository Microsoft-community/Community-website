---
sidebar: false
---
<!-- https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions -->
<script>
export default {
  data () {
    return { 
    userConfiguration: `${window.navigator.userAgent} ${navigator.languages}`
    }
  }
}
</script>

<template>
  <form name="banAppeal" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>User name or ID: <input type="text" name="user" placeholder="SantaClaus#1337" /></label>
  </p>
  <p>
    <label>Reason why you were banned: <textArea type="text" name="banReason"/></label>
  </p>
  <p>
    <label><textarea :value="userConfiguration" name="userConfiguration"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>


