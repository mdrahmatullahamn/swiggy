import { useState } from "react";
const Addproducts = () => {
    const [products, setproducts] = useState({ pName: '', pImage: '', pPrice: '' });
    function handelSubmit(e) {
        e.preventDefault();
        if (products.pName && products.pImage && products.pPrice){
            var dataFromLs = JSON.parse(localStorage.getItem("swPro")) || [];
            dataFromLs.push(products)
            localStorage.setItem("swPro", JSON.stringify(dataFromLs))
            setproducts({ pName: '', pImage: '', pPrice: '' })
            alert("product added")
        } else {
            alert("add plese all fealds")
        }
    }
    function handleInputs(e) {
        const name = e.target.name;
        const value = e.target.value;
        setproducts({ ...products, [name]: value })
    }


    return (
        <legend>
            <div className="addp">
                <h1>ADD TO CART PRODUCTS</h1>
                <h2>Snapdeal</h2>
                <form onSubmit={(e) => handelSubmit(e)}>
                    <label>Add product</label> <br />
                    <input type="text" value={products.pName} name="pName" onChange={handleInputs} /> <br />
                    <label >Add product img Url</label> <br />
                    <input type="text" value={products.pImage}  name="pImage" onChange={handleInputs} /> <br />
                    <label>Add products price</label> <br />
                    <input type="number" value={products.pPrice}  name="pPrice" onChange={handleInputs} /> <br />
                    {/* <input type="submit" value="add products" /> */}
                    <button>add products</button>  
                </form>
            </div>
        </legend>
    )
}
export default Addproducts;