const d = new Date();
const month = d.getMonth();
const refindLogo = document.getElementById("refind");

/*
    Check url code
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const findtwtr = document.getElementById("findtwtr");
const containerOne = document.getElementById("search");

function checkURL(url) {
    if (url.includes("#gsc.tab=0&gsc.q=")) {
        if (refindLogo) {
            refindLogo.style.display = "none";
        }
        if (findtwtr) {
            findtwtr.style.display = "none";
        }
        if (containerOne) {
            containerOne.style.top = "0px";
        }
    }
}

refindLogo.addEventListener("click", () => {
    window.location.href = "https://logged.re-find.net/";
});

setInterval(() => { 
    checkURL(window.location.href);
}, 2500);

const randomNum1 = Math.floor(Math.random() * 100);
const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const randomNum = genRanHex(9);
const pfpDiceBear = `https://api.dicebear.com/8.x/thumbs/svg?seed=${randomNum}`;

// session
// very much subject to change
// :)

console.warn(`%c
.d8888b.                              d8b                   
d88P  Y88b                            Y8P                   
Y88b.                                                       
 "Y888b.    .d88b.  .d8888b  .d8888b  888  .d88b.  88888b.  
    "Y88b. d8P  Y8b 88K      88K      888 d88""88b 888 "88b 
      "888 88888888 "Y8888b. "Y8888b. 888 888  888 888  888 
Y88b  d88P Y8b.          X88      X88 888 Y88..88P 888  888 
 "Y8888P"   "Y8888   88888P'  88888P' 888  "Y88P"  888  888 
 
Session ID: #${randomNum}
`, "color: #ffff00; font-weight: bold; font-size: 16px; padding: 5px;");

document.getElementById("pfp").src = pfpDiceBear;
