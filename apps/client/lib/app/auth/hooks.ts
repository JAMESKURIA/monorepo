import { useMutation } from '@tanstack/react-query'
import { loginUser } from './authtrans'

export const useLogin = (username: string, password: string) => {
    return useMutation({
        mutationFn: () => loginUser(username, password),
    })
}
