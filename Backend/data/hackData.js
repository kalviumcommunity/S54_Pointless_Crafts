const mongoose = require('mongoose')
const Hack = require('../models/dataModel.js')



require('dotenv').config({path:'../.env'})

const Hack1 = new Hack({
    title: "Make a spork",
    category: "Kitchen",
    videoUrl: "https://www.youtube.com/clip/Ugkxn9KHShj6aNhZRA-Ka9oaEBR0dSOJC8IH",
    timeDuration: "13 seconds"
})
const Hack2 = new Hack({
    title: "Hide your liquor",
    category: "Funny",
    videoUrl: "https://www.youtube.com/clip/Ugkxq_I7V58KJHLDvmIC8l36ggeZJOdSO_-S",
    timeDuration: "25 seconds"
})
const Hack3 = new Hack({
    title: "Furniture on wheels",
    category: "DIY",
    videoUrl: "https://youtube.com/clip/Ugkx1eGxa_SEhEL6V2dTWSXBrg36m1jLcrZo?feature=shared",
    timeDuration: "15 seconds"
})
const Hack4 = new Hack({
    title: "Make a candlestick",
    category: "Household",
    videoUrl: "https://youtube.com/clip/UgkxMz--cQ0Ma_Bq2_cBxCjo97qtB2-wlipi?feature=shared",
    timeDuration: "13 seconds"
})
const Hack5 = new Hack({
    title: "Noodles too long?",
    category: "Kitchen",
    videoUrl: "https://youtube.com/clip/UgkxI3Nch8uimVf9SmRfBtqJpuAZy_YFI5c5?feature=shared",
    timeDuration: "21 seconds"
})
const Hack6 = new Hack({
    title: "Phone case",
    category: "Tech",
    videoUrl: "https://youtube.com/clip/UgkxOVFzvxWPar_LAFRgiHGy68gL31JGXa1q?feature=shared",
    timeDuration: "5 seconds"
})
const Hack7 = new Hack({
    title: "Can't wear a T-shirt?",
    category: "Fashion",
    videoUrl: "https://youtube.com/clip/UgkxLZlvvwGzo3yeOnThENdQod7FcnHi4iyM?feature=shared",
    timeDuration: "21 seconds"
})
const Hack8 = new Hack({
    title: "Get your eggs whisked",
    category: "Kitchen",
    videoUrl: "https://youtube.com/clip/UgkxXXefmtYyD-69SiEzuD-beGi7fafZrgIC?feature=shared",
    timeDuration: "115 seconds"
})
const Hack9 = new Hack({
    title: "Learn how to share",
    category: "Funny",
    videoUrl: "https://youtube.com/clip/UgkxuzExiCL2U08J3t4GIt4g3loFoqvfmrBO?feature=shared",
    timeDuration: "22 seconds"
})
const Hack10 = new Hack({
    title: "Lazy?",
    category: "Funny",
    videoUrl: "https://youtube.com/clip/UgkxcqcSZ39Wb7Jir5-r1n8G2wf8_ES7o9yo?feature=shared",
    timeDuration: "23 seconds"
})

const hackData = [Hack1, Hack2, Hack3, Hack4, Hack5, Hack6, Hack7, Hack8, Hack9, Hack10]

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to MongoDB database"))
.catch((error) => console.error("Failed to connect to MongoDB:", error));


// Hack.insertMany(hackData, { timeout: 30000 })
// .then(() => console.log("Hack list added"))
// .catch((error) => console.log("Failed to insert data:", error));
