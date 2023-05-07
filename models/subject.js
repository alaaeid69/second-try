import { Schema,model } from "mongoose";
const subject = new Schema({
  name :{
    type: String,
    rquired: true
  },
  code:{
    type: String,
    rquired: false,
  }, 
},{timestamps: true}); 

model('subject',subject);
export default model('subject',subject);