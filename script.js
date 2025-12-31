const text = "Hi, I'm Gopesh Krishna";
let i = 0;

function type(){
    if(i < text.length){
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,90);
    }
}
type();

const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusText.textContent = "Sending...";
    statusText.style.color = "#aaa";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            statusText.textContent = "Message sent successfully";
            statusText.style.color = "lime";
            form.reset();
        } else {
            statusText.textContent = "Something went wrong";
            statusText.style.color = "red";
        }
    } catch {
        statusText.textContent = "Network error";
        statusText.style.color = "red";
    }
});
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    function openModal(src) {
        modal.style.display = "flex";
        modalImg.src = src;
    }

    function closeModal() {
        modal.style.display = "none";
    }