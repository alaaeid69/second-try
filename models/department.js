import { Schema,model } from "mongoose";
const department = new Schema({
  name :{
    type: String,
    rquired: true
  },
  code:{
    type: String,
    rquired: false,
  }, 
},{timestamps: true}); 

model('department',department);
export default model('department',department);