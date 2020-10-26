const state = {
    CategoryDatas: [],
    swipeDatas: [],
    userInfo: {},
    goodsLists: [],
    goodsDetails: [],
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    searchList: []

}
export default state