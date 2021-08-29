module.exports = {
      name: "play",
      code: `
      
   
      $playSong[$message;5m;no;yes;could not play song!]
      $title[Added song to Queue]
      $description[Added $message to Queue]
      $footer[Song added by @<$userID>]
      
      `
}