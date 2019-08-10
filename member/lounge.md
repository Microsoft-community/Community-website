---
sidebar: false
---



<template>
<h1>Lounge names</h1>
<div id="loungeNames"></div>
</template>
<ClientOnly>
<script>
fetch('https://cors-anywhere.herokuapp.com/https://potatofestival.co.uk/msft/loungenames.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(loungeNames) {
    console.log(loungeNames);
    document.getElementById('loungeNames').innerText = loungeNames
  });
</script>
</ClientOnly>