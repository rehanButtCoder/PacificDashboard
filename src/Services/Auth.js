import BaseUrl from "../component/BaseUrl";
export const login = async (body)=>{
    try{
        // debugger
        const response = await BaseUrl.post("/api/Account/LoginAdmin", body);
        return response;
    }catch(err){
        return err.response
    }
}