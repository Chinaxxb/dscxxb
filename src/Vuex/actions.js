import {
    getGoodsDetail,
    getGoodsList,
    searchFn
} from "../api/list"
import {
    getHomeSwipe
} from "@/api/index"


const actions = {
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async actGetSwipeDatas(context) {
        const result = await getHomeSwipe()
        console.log(result);
        context.commit("getSwipeDatas", result.data)
    },
    getUserInfo(context, data) {
        console.log(111);
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(222);
        console.log(data);
        console.log(result.data);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, params) {
        const result = await getGoodsDetail(params)
        console.log(result);
        console.log(111);
        context.commit("getGoodsDetails", result.data)
    },
    async searchKeywords(context, params) {
        console.log(111);
        const result = await searchFn(params)
        context.commit("searchKeywords", result.data)
        console.log(result.data);
        console.log(111212);
    }
}

export default actions