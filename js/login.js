const email = document.getElementById('email')
const password = document.getElementById('password')

function login() {
    const item = {
        login: email.value,
        password: password.value
    }
    useLogin(item)
        .then(data => {
            if(data.status){
                localStorage.setItem('token', data.token)
                localStorage.setItem('status', data.status)
                window.location.href = '/admin/admin.htm'
            }
        })
}