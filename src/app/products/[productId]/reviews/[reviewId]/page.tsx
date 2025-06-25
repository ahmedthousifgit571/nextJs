export default async function reviewDetails({params,}:{params:Promise<{productId:string,reviewId:string}>}){
 const {productId,reviewId } = await params
 return <h1>review of this product {reviewId}, product details {productId}</h1>
}