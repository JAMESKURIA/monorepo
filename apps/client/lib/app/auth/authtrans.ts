import { httpClient } from '../../axios'

export async function loginUser(username: string, password: string) {
    const { data } = await httpClient.post('/login/request/otp', {
        username,
        password,
    })
    return data
}
