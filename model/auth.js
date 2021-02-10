
exports.admin = () => {
    if (typeof window !== 'undefined') {
        let admin = localStorage.getItem('admin')
        if (admin) return admin
        else false

    }
}
exports.token = () => {
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('token')
        if (token) return token
        else false
    }
}
exports.editor = () => {
    if (typeof window !== 'undefined') {
        let admin = localStorage.getItem('admin')
        if (admin === null || undefined) return false
        else if (admin === "editor" || "administrator") return true
        else return false
    }

}
exports.config = () => {
    if (typeof window !== 'undefined') {
        return (
            {
                headers: {
                    "x-auth-token": localStorage.getItem('token'),
                    'admin': localStorage.getItem('admin')
                }
            })
    }
}
