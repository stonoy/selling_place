import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../feature/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const {submitting} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    type: "",
    images: [],
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const picUrl = e.target.value;
    setForm(prev => {
        return {
            ...prev,
            images: [...prev.images, picUrl]
        }
    })

    e.target.value = ""
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct(form)).then((data) => {
        if (data?.payload === "no cookie"){
        navigate("/login")
      }
    })
    
  };

  const delImage = (idx) => {
    setForm(prev => {
        const newPics = prev.images.filter((img, i) => i !== idx)

        return {
            ...prev,
            images: newPics
        }
    })
  }

//   console.log(form)

  return (
    <div className="flex justify-center bg-base-200 min-h-screen p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Sell Your Product
          </h2>

          <form onSubmit={handleSubmit} onKeyDown={(e) => {
    if (e.key === "Enter") e.preventDefault();
  }} className="space-y-4">
            {/* Title */}
            <div>
              <label className="label">
                <span className="label-text">Product Title *</span>
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Yamaha FZ V3"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Write about your product..."
                className="textarea textarea-bordered w-full"
                rows="3"
              ></textarea>
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Price (₹)*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Category *</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Bike">Bike</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Property">Property</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Location & Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Location *</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City / Area"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Type *</span>
                </label>
                <input 
                type="text" 
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="Enter Product Type"
                className="input input-bordered w-full"
                required
                />
              </div>
            </div>

            {/* Images */}
            <div>
              <label className="label">
                <span className="label-text">Upload Images (press "enter" to add image url)</span>
              </label>
              <input
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                        handleImageChange(e)
                    }
                    
                }}
                className="file-input file-input-bordered w-full"
              />
              {form.images.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.images.map((img, idx) => (
                    <div key={idx} className="relative">
                        <img
                      
                      src={img}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <IoClose onClick={() => delImage(idx)} className="absolute top-1 right-1 cursor-pointer text-black"/>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Featured */}
            

            {/* Submit */}
            <div className="pt-4">
              <button disabled={submitting} type="submit" className="btn btn-primary w-full">
                Post Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
