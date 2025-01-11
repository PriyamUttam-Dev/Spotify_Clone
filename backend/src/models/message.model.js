import mongoose from "mongoose";

const messageSchema =
  ({
    senderId: {
      type: String, //Clerk user id
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps : true });

  export const Message = mongoose.model("Message" , messageSchema)