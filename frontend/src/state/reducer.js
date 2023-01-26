import { ACTIONS } from "./StateProvider";

const {
    SET_USER,
    SET_VALID_USER_STATUS

}=ACTIONS
export const initialState={
    // user:{
    //     accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJhYzQ0OTA2ZDE5NmJjZmI1YjJjZCIsImlhdCI6MTY3MTEwODczOSwiZXhwIjoxNjcxMTEyMzM5fQ.bmLzPWHzmXJwXXHnVfadtwdaKKq0NGev_bJFh-NEX6A",
    //     id:"123",
    //     isValid:true,
    //     name:"yanis",
    //     refreshToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJhYzQ0OTA2ZDE5NmJjZmI1YjJjZCIsImlhdCI6MTY3MTEwNzIzNSwiZXhwIjoxNjcxNzEyMDM1fQ.T8IxL_IdInfCwaFzSfdM9CrChvcskEEBM4qYNtFdK74",
    //     photo:"https://lh3.googleusercontent.com/a-/AOh14GiMIG9MnHmOWtoSDw9UKljFzVklztvVdqhAoOqd=s96-c"
    // }, 
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    switch(action.type){
        case SET_USER: 
            if(action.user)localStorage.setItem('user',JSON.stringify(action.user))
            else{ 
                localStorage.clear()
                state.chats=[]; 
                state.chatsSideBar=null;
            }
            return{
                ...state,
                user:action.user
            }
        case SET_VALID_USER_STATUS:
            if(!state.user) return state;
            localStorage.setItem('user',JSON.stringify({...state.user,isValid:true}))
            return {
                ...state,
                user:{
                    ...state.user,
                    isValid:true
                }
            }
        
        default : 
            return state;
    }
}

