module.exports = {
      name: "play",
      code: `
      
      $onlyIf[$message =!;You need to enter a song!]
      $playSong[$message;5m;no;yes;could not play song!]
      $title[Added song to Queue]
      $description[Added $message to Queue]
      $footer[Song added by @<$userID>]
      
      `
}