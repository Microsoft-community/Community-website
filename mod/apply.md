---
sidebar: false
---

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<script>

$(document).ready(function(){

    $("select").change(function(){

        $(this).find("option:selected").each(function(){

            var optionValue = $(this).attr("value");

            if(optionValue){

                $(".box").not("." + optionValue).hide();

                $("." + optionValue).show();

            } else{

                $(".box").hide();

            }

        });

    }).change();

});

</script>
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
      <span>GMT/UTC timezone expression (example GMT+3). Refer to https://whatismytimezone.com for help, it shows your timezone at third line within the first section</span><br>
      <textArea type="text" name="timezone" maxlength="50"/></textArea></label>
    <p>
      <label>Why do you want to be a moderator of this particular community?<br>
      <span>What value could you bring to our team, community</span>
     <br>
     <textarea  name="why" placeholder="Enter your answer" spellcheck="true" maxlength="4000" style="height: 80px; min-height: 80px;"></textarea>
    </p>
        <p>
      <label>Something about yourself(optional)<br>
      <span>Break the ice! Or don't..</span>
     <br>
     <textarea name="about" placeholder="Enter your answer" spellcheck="true" maxlength="4000" style="height: 80px; min-height: 80px;"></textarea>
    </p>
    <p>
      <label>Have you ever moderated before on Discord? <br>
          <select>
            <option>Choose Answer</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
    </p>
    <div class="yes box">
    Testing only
    </div>
    <div data-netlify-recaptcha="true"></div>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>