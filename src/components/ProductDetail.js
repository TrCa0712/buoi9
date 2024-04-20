import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProductDetail = () => {
    const [data, setData]= useState(null)
    const {id} = useParams()
    // const getData = () =>{
    //     const url=`https://661b91e465444945d04fc6c2.mockapi.io/product/${id}`
    //     axios.get(url)
    //     .then(function(res){
    //         console.log(res)
    //         setData(res.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    useEffect(() => {
        const getData = async () => {
            try {
                const url = `https://661b91e465444945d04fc6c2.mockapi.io/product/${id}`;
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        getData();
    }, [id]);

    return (
        <div>
            <h1>Đây là chi tiết sản phẩm {id}</h1>
            <p>Name: {data&&data.NameProduct} </p>
            <p>Giá: {data&&data.Gia} </p>
            <p>Xuất Xứ: {data&&data.XuatXu} </p>
            <p>ProductDescription: {data&&data.ProductDescription} </p>
        </div>
    );
}

export default ProductDetail;
