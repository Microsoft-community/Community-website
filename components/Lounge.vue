<template>
    <h1>Lounge names history</h1>
    <em>List is curated by Torch</em>
    <hr>
    <div id="loungeNames">
        <h2>Loading...</h2>
    </div>
</template>    

<style :is="'style'">
.theme-default-content:not(.custom) {
    max-width: max-content !important;
}
</style>

<script>
fetch(`https://torch.is/typing/loungenameshtml.txt`)
    .then(response => {
        if (response.ok) return response.text()
        throw new Error('Network response was not ok.')
    })
    .then(data => document.getElementById('loungeNames').innerHTML = data);
</script>