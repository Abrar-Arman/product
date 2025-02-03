
export default function addProductForm() {
  return (
    <div style={{height:'70vh'}} className="container  mt-4 d-flex align-items-center justify-content-center ">
      <form style={{backgroundColor:'#fff',borderRadius:'12px'}} className="py-4 px-3 w-50 d-flex flex-column gap-3  ">
        <div>
        <label htmlFor='productName'>Product Name</label>
        <input type="text" className="form-control" id="productName"  />
        </div>
        <div>
        <label htmlFor='productName'>Product Price</label>
        <input type="number" className="form-control" id="productName"  />
        </div>
        <div>
        <label htmlFor='productDescription'>Product Description</label>
        <textarea className="form-control" id="productDescription" rows="3"></textarea>
        </div>
        <div>
        <input style={{backgroundColor:'rgba(255, 0, 0, 0.648)'}} type='submit' value='Add Product' className="mt-2 btn  text-white" />
        </div>
       
      </form>
    </div>
  )
}
