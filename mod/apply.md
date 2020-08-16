---
sidebar: false
---

<template>
  <form name="apply" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>What's your Discord name? Example: Jaska#1337: <input type="text" name="user" placeholder="SantaClaus#1337" maxlength="40"/></label>
  </p>
  <p>
    How long have you been an active user of Discord?  
<br>
    <input type="radio" id="1-7 months" name="time" value="1-7 months">
<label for="1-7 months">1-7 months</label><br>
<input type="radio" id="7-12 months" name="time" value="7-12 months">
<label for="7-12 months">7-12 months</label><br>
<input type="radio" id="1-2 years" name="time" value="1-2 years">
<label for="1-2 years">1-2 years</label><br>
<input type="radio" id="2-3 years" name="time" value="2-3 years">
<label for="2-3 years">2-3 years</label> <br>
<input type="radio" id="3+ years" name="time" value="3+ years">
<label for="3+ years">3+ years</label>  
  </p>
  <p>
    <label>Which timezone do you currently live in? <textArea type="text" name="appealField" maxlength="150"/></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>