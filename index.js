const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const loremLength = loremIpsum.split(" ").length;

function randomLorem()
{
    /* Outputs random lorem text, which can range from 20% to 100% of original
    size */
    const size = 1 - (Math.random() * 0.8);
    const nWords = Math.floor(loremLength * size);
    const start = Math.floor(Math.random() * (loremLength - nWords));
    return loremIpsum.split(" ").slice(start, start + nWords).join(" ");
}

function trim(text)
{
    /* According to experiments, that is the longest text that would fit into
    the box. That is also a half-tweet */
    const MAX_LENGTH = 140;
    let trimmed;

    if (text.length > MAX_LENGTH)
    {
        let arr = text.split(" ");
        while ((arr.join(" ") + " (...)").length > MAX_LENGTH)
            arr.splice(arr.length - 1);
        trimmed = arr.join(" ") + " (...)";
    }
    else
        trimmed = text;

    return trimmed;
}

document.querySelectorAll(".card").forEach( elem => {
    elem.innerHTML = `
    <div class="center">
        <div class="pic-box">
            <img src="pic-not-available.jpg" class="demo-pic">
        </div>
        <p class="card-title">TITLE | $ 25.99</p>
    </div>
    <p class="card-descr">${trim( randomLorem() )}</p>
    `;
})

document.querySelectorAll(".year").forEach( elem =>
    elem.innerText = (new Date()).getFullYear()
);