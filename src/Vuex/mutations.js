import {
    MessageBox
} from 'mint-ui';
2
const mutations = {
    getCategoryDatas(state, data) {
        state.CategoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)

            console.log(1111);
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    addCart(state, index) {
        state.carts[index].value++
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    jianCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        } else {
            state.carts[index].value--
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }
    },
    changeValue(state, data) {
        if (data.val <= 1) {
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            })
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    dele(state, index) {
        MessageBox.confirm("亲，您确定放弃该宝贝吗？").then(() => {
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {})
    },
    changeSelect(state, isSelect) {
        state.carts[isSelect.index] = isSelect.cart
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true

        })
        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)
        localStorage.setItem("carts", JSON.stringify(state.carts))


    },
    selectAllFn(state) {
        state.checkAll = !state.checkAll
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)
    },
    searchKeywords(state, data) {
        state.searchList = data
    }

}
export default mutations;