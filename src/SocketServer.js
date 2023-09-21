export default (socket) => {
  // user joins or open the app
  socket.on("join", (user) => {
    console.log('JOINED USER: ',user);
    socket.join(user);
  });

  // join a conversation room
  socket.on("joinConversation", (conversation) => {
    socket.join(conversation);
    console.log("JOINED CONVERSATION: ", conversation);
  });
};
