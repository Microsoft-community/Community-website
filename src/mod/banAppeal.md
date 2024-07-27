---
sidebar: false
---

<template>
  <form name="banAppeal" method="POST" data-netlify-recaptcha="true" data-netlify="true">
  <p>
    <label>User name or ID: <input type="text" name="user" placeholder="SantaClaus#1337" maxlength="40"/></label>
  </p>
  <p>
    <label>Reason why you were banned: <textArea type="text" name="banReason" maxlength="150"/></label>
  </p>
  <p>
    <label>Why should you unbanned and what will you do differently: <textArea type="text" name="appealField" maxlength="150"/></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>


