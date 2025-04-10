const email = document.getElementById('email')
const password = document.getElementById('password')

function login() {
    fetch('https://neptunbk.vercel.app/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            login: email.value,
            password: password.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.status){
                localStorage.setItem('token', data.token)
                localStorage.setItem('status', data.status)
                window.location.href = '/admin/admin.htm'
            }
        })
}