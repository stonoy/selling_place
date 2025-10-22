import axios from "axios"
import {io} from "socket.io-client"

export const customFetch = axios.create({
    baseURL : location.hostname === "localhost" ? "http://localhost:8080/api" : "/api",
    withCredentials: true,
})

export const startSocketConnection = () => {
    const baseUrl = location.hostname === "localhost" ? "http://localhost:8080" : ""

    return io(baseUrl)
}

export const makeQueryUrl = (url, queryObj) => {
    
    url += "?"
    for (let key in queryObj){
        url += `${key}=${queryObj[key]}&`
    }

    return url.slice(0,-1)
}

export const extractCat = (categoryObj, selectedType) => {
    let category;

    for (let key in categoryObj){
        if (categoryObj[key].includes(selectedType)){
            category = key
        }
    }

    return category
}

export const locationNum = (remainingProducts) => {
    return remainingProducts.reduce((total, product) => {
        if (total[product.location]){
            total[product.location]++
        } else {
            total[product.location] = 1
        }

        return total
    }, {})
}

export const loadingQuotes = [
    "🌀 Good things take time — hang tight!",

"🚀 Fetching the best deals just for you...",

"💡 Great finds are worth the wait.",

"🔄 Loading treasures from our marketplace...",

"🛍️ Almost there! Your next favorite item is on the way.",
]

export const languages = ["English", "Bangla", "Hindi"]

export const chatList = [
  {
    id: "chat1",
    participants: [
      { id: "u1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1", online: true },
      { id: "u2", name: "Bob", avatar: "https://i.pravatar.cc/150?img=2", online: false },
    ],
    messages: [
      { sender: "u1", text: "Hey Bob, how's it going?", seen: true },
      { sender: "u2", text: "Hi Alice! I'm good, you?", seen: true },
      { sender: "u1", text: "Doing well, thanks!", seen: false },
    ]
  },
  {
    id: "chat2",
    participants: [
      { id: "u1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1", online: true },
      { id: "u3", name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3", online: true }
    ],
    messages: [
      { sender: "u3", text: "Are you coming to the meetup?", seen: false },
      { sender: "u1", text: "Yes, I’ll be there by 5pm", seen: false }
    ]
  },
  {
    id: "chat3",
    participants: [
      { id: "u1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1", online: true },
      { id: "u4", name: "David", avatar: "https://i.pravatar.cc/150?img=4", online: false }
    ],
    messages: [
      { sender: "u4", text: "Sent you the document.", seen: true },
      { sender: "u1", text: "Got it, thanks!", seen: false }
    ]
  },
  {
    id: "chat4",
    participants: [
      { id: "u1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1", online: true },
      { id: "u5", name: "Eve", avatar: "https://i.pravatar.cc/150?img=5", online: true }
    ],
    messages: [
      { sender: "u5", text: "Let’s plan the trip.", seen: true },
      { sender: "u1", text: "Yes, sounds good. Where to?", seen: false }
    ]
  },
  {
    id: "chat5",
    participants: [
      { id: "u1", name: "Alice", avatar: "https://i.pravatar.cc/150?img=1", online: true },
      { id: "u6", name: "Frank", avatar: "https://i.pravatar.cc/150?img=6", online: false }
    ],
    messages: [
      { sender: "u6", text: "Hey, long time no see!", seen: false },
      { sender: "u1", text: "Yes! How have you been?", seen: false }
    ]
  }
];