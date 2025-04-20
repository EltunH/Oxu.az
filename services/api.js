

async function usePostNews(item) {
    const res = await  fetch(`${configObject.base}/oxuaz`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    return await res.json()
}

async function useGetNews() {
    const res = await fetch(`${configObject.base}/oxuaz`)
    return await res.json()
}

async function useDelNews(id) {
    const res = await fetch(`${configObject.base}/oxuaz/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}

async function usePutNews(id, item) {
    const res = await fetch(`${configObject.base}/oxuaz/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return res.json()
}

async function useLogin(item) {
    const res = await fetch(`${configObject.verify}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return await res.json()
}

async function useVerify(token) {
    const res = await fetch(`${configObject.verify}/auth/verify-token`,{
        headers:  {'Authorization': `Bearer ${token}`}
    })
    return await res.json()
}