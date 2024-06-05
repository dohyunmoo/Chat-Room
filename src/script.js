const chatForm = document.getElementById('chat-form');
const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = messageInput.value;
  if (!message) {
    return;
  }

  // Send message to Golang backend API endpoint (implementation omitted)
  sendMessage(message);

  messageInput.value = '';
});

function sendMessage(message) {
  // Replace with your actual API call and error handling
  fetch('/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
  })
  .then(response => response.json())
  .then(data => {
    // Update chat history with response (implementation omitted)
    updateChatHistory(message, data.response);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}

function updateChatHistory(userMessage, botResponse) {
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('message');
  userMessageElement.innerHTML = `<p class="user-message">${userMessage}</p>`;

  const botMessageElement = document.createElement('div');
  botMessageElement.classList.add('message');
  botMessageElement.innerHTML = `<p>${botResponse}</p>`;

  chatHistory.appendChild(userMessageElement);
  chatHistory.appendChild(botMessageElement);

  chatHistory.scrollTop = chatHistory.scrollHeight;
}
