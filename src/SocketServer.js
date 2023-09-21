export default (socket) => {
  // user joins or open the app
  socket.on("join", (user) => {
    console.log("JOINED USER: ", user);
    socket.join(user);
  });

  // join a conversation room
  socket.on("joinConversation", (conversation) => {
    socket.join(conversation);
    console.log("JOINED CONVERSATION: ", conversation);
  });

  // send and receive message
  socket.on("sendMessage", (message) => {
    let conversation = message.conversation;
    if (!conversation.users) return;
    conversation.users.forEach((user) => {
      if (user._id === message.sender._id) return;
      socket.in(user._id).emit("messageReceived", message);
    });
  });
};
