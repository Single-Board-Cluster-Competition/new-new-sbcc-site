// Swap any image that fails to load (e.g. not yet added to assets/) for a
// labeled placeholder, so the layout holds together while assets are missing.
document.querySelectorAll("img").forEach((img) => {
    const replace = () => {
        if (img.dataset.optional !== undefined) {
            img.remove();
            return;
        }
        const placeholder = document.createElement("div");
        placeholder.className = "img-placeholder";
        placeholder.textContent = `Missing image: ${img.getAttribute("src")}`;
        img.replaceWith(placeholder);
    };
    if (img.complete && img.naturalWidth === 0) {
        replace();
    } else {
        img.addEventListener("error", replace, { once: true });
    }
});

// Click-to-load embeds: <div data-embed="URL"><button>…</button></div>
document.querySelectorAll("[data-embed]").forEach((box) => {
    box.querySelector("button").addEventListener("click", () => {
        const frame = document.createElement("iframe");
        frame.src = box.dataset.embed;
        frame.title = box.dataset.embedTitle || "";
        box.replaceChildren(frame);
    }, { once: true });
});
