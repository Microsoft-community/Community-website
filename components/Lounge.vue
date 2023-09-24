<template>
    <h1>Lounge names history</h1>
    <em>List is curated by <a href="https://github.com/torchgm">Torch</a></em>
    <hr>
    <div id="loungeNames">
        <h2>Loading...</h2>
    </div>
</template>

<script>
import { onMounted } from "vue";

onMounted(() => {
    if (document !== undefined) {
        document.title = "Microsoft Community";

        fetch(`https://torch.is/typing/loungenameshtml.txt`)
            .then(response => {
                if (response.ok) return response.text()
                throw new Error('Network response was not ok.')
            })
            .then(data => document.getElementById('loungeNames').innerHTML = data);
    }
});
</script>