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

export const socialLogos = [
    { href: "https://twitter.com", svgPath: "M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-3.179 0-5.515 2.967-4.797 6.045-4.09-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.582 4.415 3.949 4.89-.693.187-1.452.23-2.224.083.626 1.956 2.444 3.379 4.6 3.419-2.07 1.624-4.678 2.35-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.961-.695 1.797-1.562 2.457-2.549z" },
    { href: "https://youtube.com", svgPath: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
    { href: "https://facebook.com", svgPath: "M22.676 0h-21.352c-.73 0-1.324.594-1.324 1.324v21.352c0 .73.594 1.324 1.324 1.324h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.352c0-.73-.594-1.324-1.324-1.324z" },
  ]

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

export const No_Pic = `https://cdn.pixabay.com/photo/2020/08/07/00/27/forbidden-5469452_1280.png`