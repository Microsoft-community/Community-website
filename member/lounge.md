---
sidebar: false
---

<template>
<h1>Lounge names history</h1>
<em>List is curated by <a href="https://discordhub.com/profile/159016432498114560">Torch</a></em><hr>
<div id="loungeNames"><h2>Loading...</h2></div>
</template>
<style>
  .theme-default-content:not(.custom) {
    max-width: max-content !important;
  }
</style>
<ClientOnly>
<tt>
<script>
fetch('https://cors-anywhere.herokuapp.com/https://torch.is/typing/loungenameshtml.txt', {mode: 'no-cors', headers: {'Content-Type': 'text/plain'}})
  .then(function(response) {
    return response.text();
  })
  .then(function(loungeNames) {
    document.getElementById('loungeNames').innerHTML = loungeNames
  });
</script>
</tt>
</ClientOnly>
