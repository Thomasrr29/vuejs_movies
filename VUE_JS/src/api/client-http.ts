import type { AxiosInstance } from "axios";
import axios from "axios";

class ClientHttp {

    private api: AxiosInstance; 
    private apikey: string = "26a5239f"

    constructor(){
        this.api = axios.create({
            baseURL: "https://www.omdbapi.com",
            headers: {
                "Content-Type":"application/json"
            }, 
            params: {
                apikey: this.apikey
            }
        })
        
    }

    getApi(){
        return this.api; 
    }
}
//When we write new the constructor is launched automatically
export default new ClientHttp().getApi(); 