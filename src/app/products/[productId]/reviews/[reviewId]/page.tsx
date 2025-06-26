import { notFound } from "next/navigation"

export default async function reviewDetails({params,}:{params:Promise<{productId:string,reviewId:string}>}){
 const {productId,reviewId } = await params
 if(parseInt(reviewId) > 1000){
    notFound()
 }
 return <h1>review of this product {reviewId}, product details {productId}</h1>
}