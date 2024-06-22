import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//rafce
/* const Add = () => {

    const [mobile, setMobile] = useState({
        title: "",
        description: "",
        price: 0,
        cover: ""
    });

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        setUploading(true);
        try {
          //  const { data } = await axios.get('http://localhost:3001/api/upload');
            const formData = new FormData();
            formData.append('file', image);
            formData.append('timestamp', data.timestamp);
            formData.append('api_key', data.api_key);
            formData.append('signature', data.signature);
            formData.append('cloud_name', data.cloud_name);

            const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${data.cloud_name}/image/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setImageUrl(uploadResponse.data.secure_url);
            setUploading(false);
        } catch (error) {
            console.error('Error uploading image:', error);
            setUploading(false);
        }
    };

    const navigate = useNavigate()

    const handleChange = (e) => {
        setMobile(prev=>({...prev, [e.target.name]: e.target.value }));
    };

   const handleClick = async e =>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:8800/products", mobile)
        navigate("/")
    }catch(err){
        console.log(err)
    }
   }
console.log(mobile)
  return (
    <div>
    <h2>Mobile Form</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input type="text" name="title" value={mobile.title} onChange={handleChange} />
        </div>
        <div>
            <label>Description</label>
            <textarea name="description" value={mobile.description} onChange={handleChange}></textarea>
        </div>
        <div>
            <label>Price</label>
            <input type="number" name="price" value={mobile.price} onChange={handleChange} />
        </div>
        <div>
            <label>Cover</label>
            <input type="file" onChange={handleImageChange} />
            {uploading ? <p>Uploading...</p> : mobile.cover && <img src={mobile.cover} alt="Cover" style={{ width: '100px' }} />}
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
  )
}

export default Add */

const Add = () => {
    const [mobile, setMobile] = useState({
        brand: "",
        model: "",
        price: 0,
        cover: ""
    });

    const navigate = useNavigate()

    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMobile({ ...mobile, [name]: value });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            try {
                const { data } = await axios.get('http://localhost:8800/api/upload');
                const formData = new FormData();
                formData.append('file', file);
                formData.append('timestamp', data.timestamp);
                formData.append('api_key', data.api_key);
                formData.append('signature', data.signature);
                formData.append('cloud_name', data.cloud_name);

                const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${data.cloud_name}/image/upload`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                setMobile({ ...mobile, cover: uploadResponse.data.secure_url });
                setUploading(false);
            } catch (error) {
                console.error('Error uploading image:', error);
                setUploading(false);
            }
        }
    };

    const handleSubmit = async e =>{
        e.preventDefault();

        try{
            await axios.post("http://localhost:8800/products", mobile)
            navigate("/")
        }catch(err){
            console.log(err)
        }
        // Submit your form data to the backend
        console.log(mobile);
    };

    return (
        <div>
            <h2>Mobile Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Marca</label>
                    <input type="text" name="brand" value={mobile.brand} onChange={handleChange} />
                </div>
                <div>
                    <label>Modelo</label>
                    <textarea name="model" value={mobile.model} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" name="price" value={mobile.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Imagen</label>
                    <input type="file" onChange={handleImageChange} />
                    {uploading ? <p>Uploading...</p> : mobile.cover && <img src={mobile.cover} alt="Cover" style={{ width: '100px' }} />}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Add;
