import axios from "axios";
import qs from "qs"
import loading from "../lib/loading/index.js"

let vm = loading()
const server = axios.create({
//    baseURL:"https://m.jiuxian.com",
    timeout:5000,
    withCredentials:true
})


server.interceptors.request.use((config)=>{
    console.log(config)
    if(config.method.toUpperCase() == "GET"){
    //    config.params = {...config.data}
       
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
        //config.data = qs.stringify(config.data)
    }
    
    vm.handlemount();

    return config;
},(err)=>{
    Promise.reject(err);
})


server.interceptors.response.use((res)=>{
    console.log(res,11)
    if(res.statusText == "OK"){
       vm.handleDestory();
       
        return res.data
    }

},(err)=>{
    Promise.reject(err);
})



export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){
       
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}