---
sidebar: false
search: false
---

# Lounge names
_List is curated by [Torch](https://discordhub.com/profile/159016432498114560)_

<template>
<div id="loungeNames"><h2>Loading..</h2></div>
</template>
<ClientOnly>
<script>
fetch('https://cors-anywhere.herokuapp.com/https://potatofestival.co.uk/msft/loungenames.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(loungeNames) {
    document.getElementById('loungeNames').innerText = loungeNames
  });
</script>
</ClientOnly>