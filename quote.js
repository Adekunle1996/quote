const quotebtn=document.querySelector("#quotetebtn");
const quoteDisplay=document.querySelector("#quoteDisplay");
const authorName=document.querySelector("#aurthorName");
const quotes=[
    {
        name:"Stephen King",
        quote:"Get busy living or get busing dying"
    },
    {
        name:"John F.Kennedy",
        quote:"Those who dare to fall miserably can achive greatly."
    },
    {
        name:"Leo Tolstoy",
        quote:"if you want to be happy, be."
    },
    {
        name:"Abraham Lincoln",
        quote:"I'm a succes today because I had a friend who believed in me and I didn't have the heart to let him down."
    },

]
function quotesFunction(){
    const randomNo=Math.floor(Math.random()*quotes.length);
    quoteDisplay.innerHTML=quotes[randomNo].quote;
    authorName.innerHTML=quotes[randomNo].name;
}
quotebtn.addEventListener("click", quotesFunction);