import { Client } from "discord.js"
import {getFirestore } from 'firebase/firestore'
require('dotenv').config()

const client = new Client({ intents: [] })
const db = getFirestore();


const sadWords = ["sad", "depressed", "unhappy", "down"]
const starterEncouragements = ["it's ok to be sad sometimes", "ur a sweet person or bot", "i know how u feel, im lost too"]

// db.get("responding").then(value => {
//   if (value == null) {
//     db.set("responding", true)
//   }
// })

// db.get("encouragements").then(encouragements => {
//   if (!encouragements || encouragements.length < 1) {
//     db.set("encouragements", starterEncouragements)
//   }
// })

// function updateEncouragements(encouragingMessage) {
//   db.get("encouragements").then(encouragements => {
//     encouragements.push([encouragingMessage])
//     db.set("encouragements", encouragements)
//   })
// }

// function deleteEncouragement(index) {
//   db.get("encouragements").then(encouragements => {
//     if (encouragements.length > index) {
//       encouragements.splice(index, 1);
//       db.set("encouragements", encouragements)
//     }
//   })
// }

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === '$inspire') {
    getQuote().then(quote => msg.channel.send(quote))
  }

  if(msg.content === "ping") {
    msg.reply("pong")
  }

  // db.get("responding").then(responding => {
  //   if (responding && sadWords.some(word => {msg.content.includes(word)})) {
  //         db.get("encouragements").then(encouragements => {
  //           const encouragement = encouragements[Math.floor(Math.random() *
  //           encouragements.length)]
  //           msg.reply(encouragement)
  //   })
  // }
  // })

  

  // if (msg.content.startsWith("$new")) {
  //   encouragingMessage = msg.content.split("$new ")[1]
  //   updateEncouragements(encouragingMessage)
  //   msg.channel.send("New encouraging message added.")
  // }

  // if (msg.content.startsWith("$del")) {
  //   index = parseInt(msg.content.split("$del ")[1])
  //   deleteEncouragement(index)
  //   msg.channel.send("New encouraging message deleted.")
  // }

  // if(msg.content.startsWith("$list")) {
  //   db.get("encouragements").then(encouragements => {
  //     msg.channel.send(encouragements)
  //   })
  // }

  // if(msg.content.startsWith("$responding")) {
  //   value = msg.content.split("$responding ")[1]
    
  //   if (value.toLowerCase() == "true") {
  //     db.set("responding", true)
  //     msg.channel.send("responding is on.")
  //   }
  //   else {
  //     db.set("responding", false)
  //     msg.channel.send("responding is off.")
  //   }
  // }
  
})

client.login(process.env.BOT_TOKEN)



