const mongoose = require('mongoose')
const Hack = require('../models/dataModel.js')
const User = require('../models/userModel.js')



require('dotenv').config({ path: '../.env' })

const Hack1 = new Hack({
    title: "Make a spork",
    category: "Kitchen",
    videoUrl: "https://www.youtube.com/embed/oh_gmsc62dk?si=qBCHT9qMzGtK7y36&amp;clip=Ugkxn9KHShj6aNhZRA-Ka9oaEBR0dSOJC8IH&amp;clipt=ELasARi3lwI",
    timeDuration: "13 seconds"
})
const Hack2 = new Hack({
    title: "Hide your liquor",
    category: "Funny",
    videoUrl: "https://www.youtube.com/embed/oh_gmsc62dk?si=OFABj8gjizLoI7K4&amp;clip=Ugkxq_I7V58KJHLDvmIC8l36ggeZJOdSO_-S&amp;clipt=EMS9AhiThAQ",
    timeDuration: "25 seconds"
})
const Hack3 = new Hack({
    title: "Furniture on wheels",
    category: "DIY",
    videoUrl: "https://www.youtube.com/embed/oh_gmsc62dk?si=Pn04O1Sp0xrXbW_N&amp;clip=UgkxQgCRI6h7Q174mwNkGEL6vJxk2EGDAECw&amp;clipt=EIqTBRiiiAY",
    timeDuration: "15 seconds"
})
const Hack4 = new Hack({
    title: "Make a candlestick",
    category: "Household",
    videoUrl: "https://www.youtube.com/embed/oh_gmsc62dk?si=TJHxShZ8uuXt0FNM&amp;clip=UgkxMz--cQ0Ma_Bq2_cBxCjo97qtB2-wlipi&amp;clipt=ELOXDhjf_g4",
    timeDuration: "13 seconds"
})
const Hack5 = new Hack({
    title: "Noodles too long?",
    category: "Kitchen",
    videoUrl: "https://www.youtube.com/embed/YMPR-jffgRw?si=zYpoWOyoxpJZy7i_&amp;clip=UgkxI3Nch8uimVf9SmRfBtqJpuAZy_YFI5c5&amp;clipt=EOVKGN_zAQ",
    timeDuration: "21 seconds"
})
const Hack6 = new Hack({
    title: "Phone case",
    category: "Tech",
    videoUrl: "https://www.youtube.com/embed/oh_gmsc62dk?si=0wOCWqzUAI3cOSwq&amp;clip=UgkxOVFzvxWPar_LAFRgiHGy68gL31JGXa1q&amp;clipt=EOXfHhjcjR8",
    timeDuration: "5 seconds"
})
const Hack7 = new Hack({
    title: "Can't wear a T-shirt?",
    category: "Fashion",
    videoUrl: "https://www.youtube.com/embed/YMPR-jffgRw?si=wUta4FRi_gOC9Eel&amp;clip=UgkxLZlvvwGzo3yeOnThENdQod7FcnHi4iyM&amp;clipt=EKbBEBil5BE",
    timeDuration: "21 seconds"
})
const Hack8 = new Hack({
    title: "Get your eggs whisked",
    category: "Kitchen",
    videoUrl: "https://www.youtube.com/embed/YMPR-jffgRw?si=XMNnPPA-KzldyxQc&amp;clip=UgkxXXefmtYyD-69SiEzuD-beGi7fafZrgIC&amp;clipt=ENCwFhjzqhc",
    timeDuration: "115 seconds"
})
const Hack9 = new Hack({
    title: "Learn how to share",
    category: "Funny",
    videoUrl: "https://www.youtube.com/embed/YMPR-jffgRw?si=1Y19t_KyvCDfEPLE&amp;clip=UgkxuzExiCL2U08J3t4GIt4g3loFoqvfmrBO&amp;clipt=EPe7FxiP6hg",
    timeDuration: "22 seconds"
})
const Hack10 = new Hack({
    title: "Lazy?",
    category: "Funny",
    videoUrl: "https://www.youtube.com/embed/ODLo7ZnMNmY?si=Dn9q4TMeOF_Xy9BY&amp;clip=UgkxcqcSZ39Wb7Jir5-r1n8G2wf8_ES7o9yo&amp;clipt=EKBKGIf_AQ",
    timeDuration: "23 seconds"
})

const hackData = [Hack1, Hack2, Hack3, Hack4, Hack5, Hack6, Hack7, Hack8, Hack9, Hack10]

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB database"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));


Hack.insertMany(hackData, { timeout: 30000 })
.then(() => console.log("Hack list added"))
.catch((error) => console.log("Failed to insert data:", error));

// // Insert User data

