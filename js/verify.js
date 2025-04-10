function checkVerify() {
    const token = localStorage.getItem('token')
    const isSatus = localStorage.getItem('status')

    if (isSatus && token) {
        fetch('https://neptunbk.vercel.app/auth/verify-token',{
            headers:  {'Authorization': `Bearer ${token}`}
        })
            .then(res => res.json())
            .then(data => {
                if(!data.status) window.location.href = '/auth/login.htm' 
            })
    } else window.location.href = '/auth/login.htm'
}