import { notFound } from "next/navigation"

export default async function Name({params,}:{params:Promise<{name:string}>}){
     const {name} = await params
     if(name.length > 9){
        notFound()
     }
     return <h1>this is {name}'s  Profile </h1>
}