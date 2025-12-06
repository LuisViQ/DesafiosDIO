const conta = {
    email: 'luisqueiroz@gmail.com',
    password: '123456',
    name: 'Luis',
    balance: 2000.00
}
export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
}) 
