import ajax from "./ajax"

const Base_URL = "http://localhost:3000/api"

export const getHomeSwipe = () => ajax(Base_URL + "/v1/index/swipe")