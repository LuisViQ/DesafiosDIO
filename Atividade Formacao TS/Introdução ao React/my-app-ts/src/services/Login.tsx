import { api } from "../api"
interface UserData{
   email:string
   password:string
   name:string
}
export const login = async(email:string): Promise<void> => {
   const data: any | UserData = await api
   if (email === data.email ){
      alert(`Olá ${data.email}`)
   }else{
      alert('Email inválido')
   }
  }