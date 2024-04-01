import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from '../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading:true,
  isError:false,
  error:"",
};


export const createUser = createAsyncThunk("userSlice/createUser",async({email,password})=>{
 const data = await createUserWithEmailAndPassword(auth,email,password);
 console.log(data);
 return;
});



const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(createUser.pending,(state,{payload})=>{
      
    });
  }
});

export default userSlice.reducer;
