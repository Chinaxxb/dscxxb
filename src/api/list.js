import ajax from "./ajax"

const Base_URL = "/api"

export const getGoodsList = (cid) => ajax(Base_URL + "/v4/catalog/goodslist", {
    cat_id: cid
}, "post")

export const getGoodsDetail = (cid) => ajax(Base_URL + "/v4/goods/show", {
    goods_id: cid
}, "post")
export const searchFn = (keywords) => ajax(Base_URL + "/v4/catalog/goodslist", {
    keywords: keywords
}, "post")