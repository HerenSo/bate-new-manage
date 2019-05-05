import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui';
// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {

    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
//  if (localStorage.getItem("userToken")) {
//      //用户每次操作，都将cookie设置成2小时
////      cookie.set("token",cookie.get("token") ,1/12)    
//　　　　       config.headers.tokenId = localStorage.getItem("userToken");
//  }
    config.transformRequest = [function (data) {
			if(Array.isArray(data) || Object.prototype.toString.apply(data) ==='[object Object]'){
	        let ret = '';
	        for (let it in data) {
	            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	        }
	        return ret
	    } else {
	        return data;
	    }
 		 }]
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
  		if (response.data.code == '200'){
	        return response;
  		}else if (response.data.code == '10' 
  		|| response.data.code == '11' 
  		|| response.data.code == '21' 
  		|| response.data.code == '22' 
  		|| response.data.code == '35'
  		|| response.data.code == '36') {
  			console.log(response.data.code);
	        Message({
	          message: response.data.msg,
	          type: 'warning',
//	          showClose: true,
//	          duration: 20000,
	          onClose: function(){
	            router.push('/login');
	          }
	        });
	        return
	    }else{
			Message({
	          message: response.data.msg || "请求错误!",
	          type: 'warning'
	        });
	        return
	    }
//  }
  },
  error => {
  	console.log(error.response)
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });
export default axios;
