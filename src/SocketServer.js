let onlineUsers = [];

export default (socket, io) => {
  // user joins or open the app
  socket.on("join", (user) => {
    socket.join(user);

    // add joined online users in onlineUsers if it not in
    if (!onlineUsers.some((u) => u.userId === user)) {
      onlineUsers.push({ userId: user, socketId: socket.id });
    }

    //send online users to frontend
    io.emit("getOnlineUsers", onlineUsers);
  });

  // socket disconnect
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((u) => u.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });

  // join a conversation room
  socket.on("joinConversation", (conversation) => {
    socket.join(conversation);
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
