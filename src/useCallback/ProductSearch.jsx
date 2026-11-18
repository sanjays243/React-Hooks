import { useCallback, useState } from "react";

function ProductSearch(){
    const [products]=useState([
        {id:1,name:"Laptop",category:"Electronics"},
        {id:2,name:"Mobile",category:"Electronics"},
        {id:3,name:"Shirt",category:"Fashion"},
        {id:4,name:"Shoes",category:"Fashion"}
    ])

    const [category,setCategory]=useState("All")
    const [search,setSearch]=useState("")

    const filterProducts=useCallback(()=>{
        return products.filter((product)=>{
            const categoryMatch=
            category==="All" || product.category===category

            const searchMatch=
            product.name.toLowerCase().includes(search.toLowerCase())

            return categoryMatch&& searchMatch;
        })
    },[products,category,search])

    const filteredProducts= filterProducts();
    return(
        <div>
            <hr />
            <center><h1>UseCallback - Hook</h1></center>

            <h1>Product Search</h1>

            <input type="text"
            placeholder="Search product"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} />

            <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
            </select>

            {filteredProducts.map((product)=>(
                <p key={product.id}>
                    {product.name}-{product.category}
                </p>
            ))}
        </div>
    )
}
export default ProductSearch;