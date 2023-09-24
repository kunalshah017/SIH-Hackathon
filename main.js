// Get references to the chatbot and the button
const chatbot = document.getElementById("chatbot");
const showChatButton = document.getElementById("showChatButton");

// Add a click event listener to the button
showChatButton.addEventListener("click", () => {
    // Toggle the visibility of the chatbot
    chatbot.classList.toggle("chatbot-hidden");
});
