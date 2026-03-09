if (document.getElementById("home-page")) {  // only run on Home page

    // Custom cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.innerHTML = "💗";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    document.addEventListener("click", (e) => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = e.pageX + "px";
        heart.style.top = e.pageY + "px";
        heart.style.fontSize = "16px";
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 600);
    });

    // Floating "Hello" words
    const colors = ["#ff4da6", "#ff77b3", "#e0b0ff"];
    const words = ["Hello", "👋", "Welcome!"];

    function createFloatingWord() {
        const word = document.createElement("div");
        word.className = "floating-word";
        word.innerText = words[Math.floor(Math.random() * words.length)];
        word.style.left = Math.random() * window.innerWidth + "px";
        word.style.top = Math.random() * window.innerHeight + "px";
        word.style.color = colors[Math.floor(Math.random() * colors.length)];
        word.style.fontSize = (20 + Math.random() * 30) + "px";
        document.body.appendChild(word);
        setTimeout(() => { word.remove(); }, 5000);
    }

    setInterval(createFloatingWord, 800);

}
