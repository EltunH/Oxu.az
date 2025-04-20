function checkVerify() {
    const token = localStorage.getItem('token')
    const isSatus = localStorage.getItem('status')

    if (isSatus && token) {
        useVerify(token)
            .then(data => {
                if(!data.status) window.location.href = '/auth/login.htm' 
            })
    } else window.location.href = '/auth/login.htm'
}