import axios from "axios";
export default function ajax(url = "", params = {}, type = "get") {
    let promise
    return new Promise((resolve, reject) => {
        if ("get" === type) {
            let paramsStr = ""
            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&"
            })
            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"))

            }
            url += "?" + paramsStr
            promise = axios.get(url)
        } else if ("post" === type) { //post请求方式
            promise = axios.post(url, params)
        }
        promise.then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}