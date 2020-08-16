---
sidebar: false
---

<template>
  <form name="apply" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>What's your Discord name? Example: Jaska#1337: <br>
    <input type="text" name="user" placeholder="SantaClaus#1337" maxlength="40"/></label>
  </p>
 <p>How long have you been an active user of Discord?</p>
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
  <p>
    <label>Which timezone do you currently live in? <br>
    <span>GMT/UTC timezone expression (example GMT+3). Refer to https://whatismytimezone.com for help, it shows your timezone at third line within the first section</span>
    <textArea type="text" name="timezone" maxlength="50"/></label>
  <p>
    <label>Why do you want to be a moderator of this particular community?<br>
    <span>What value could you bring to our team, community</span>
   <br>
   <textarea placeholder="Enter your answer" spellcheck="true" maxlength="4000" style="height: 80px; min-height: 80px;"></textarea>
  </p>
  
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>