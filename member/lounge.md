---
sidebar: false
---

<template>
<h1>Lounge names history</h1>
<em>List is curated by Torch</em><hr>
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
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://torch.is/typing/loungenameshtml.txt')}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => document.getElementById('loungeNames').innerHTML = data.contents);
</script>
</tt>
</ClientOnly>
