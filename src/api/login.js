import request from "../request/request";

export const getEmailCode = (data) => {
    return request({
        method: "post",
        url: "/user/email",
        data
    })
}

export const getPhoneCode = (data) => {
    return request({
        method: "post",
        url: "/user/phoneCode",
        data
    })
}

export const countLogin = (data) => {
    return request({
        method: "post",
        url: "/user/count",
        data
    })
}
export const phoneLogin = (data) => {
    return request({
        method: "post",
        url: "/user/phone",
        data
    })
}
export const emailLogin = (data) => {
    return request({
        method: "post",
        url: "/user/email/login",
        data
    })
}