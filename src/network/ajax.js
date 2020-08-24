import axios from 'axios'

// axios封装
export function ajax(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/z8',
        timeout:5000
    });
	// axios请求拦截
	instance.interceptors.request.use(config=>{
		return config
	},err=>{
		console.log(err)
	})
	// axios的响应拦截
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		console.log(err)
	})
	
    return instance(config)
}