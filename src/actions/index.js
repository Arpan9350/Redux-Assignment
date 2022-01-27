export const register = (data) => {
    console.log("in action",data)
    return {
        type: "Register",
        payload: data
    }
}
export const login = (data) => {
    return {
        type: "Login",
        payload: data
    }
}
export const update = (data) => {
    return {
        type: "Update",
        payload: data
    }
}

export const logout = (data) => {
    return {
        type: "Logout",
        payload: data
    }
}
