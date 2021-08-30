module.exports = {
      name: "play",
      code:
      `
      
      $title[Added song to Queue]
      $description[added $songInfo[title]]
      $footer[Added $message to Queue]
      $playSong[$message;5m;no;yes;could not play song!]
      
      `
} 
