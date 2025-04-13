function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('status')
    window.location.href = '/auth/login.htm'
}