
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AdminAddProducts.css'

const AdminAddProducts = () => {


    const { register, handleSubmit, reset } = useForm();

    // from theke value niye server a save korbe 

    const onSubmit = data => {
        console.log(data);
        axios.post('https://four-wheel-25-06-2022.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire('Product Add SuccessFully')
                    reset();
                }
            })
    }

    return (
        <>
            <div class="formstyle">
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-center p-5'>
                    <input {...register("name", { required: true })} placeholder="Place Name" />
                    <textarea {...register("description")} placeholder="Package Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input type="submit" />

                </form>
            </div>
        </>
    );
};

export default AdminAddProducts;