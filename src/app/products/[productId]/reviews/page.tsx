export default async function reviewForProducts({params,}:{params:Promise<{productId:string,reviewId:string}>}){
    const {productId,reviewId}= await params
    return <h1>prouct review for this is {reviewId}</h1>
}