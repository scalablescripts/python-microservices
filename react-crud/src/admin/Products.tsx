import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (
            async() => {
                const response = await fetch('http://localhost:8000/api/products/');
                const data = await response.json();
                setProducts(data);
            }
        )();
    }, [])

    const del = async(id: number) => {
        if(window.confirm('Are you sure you want to delete?')) {
            await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE'
            });
            setProducts(products.filter((p: Product) => p.id !== id));
        }
    }
    return (
        <Wrapper>
            <div>
                <div className="pt-3 pb-2 mb-3 border=bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'admin/products/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive small">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map(
                            (p: Product) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} height="180" /></td>
                                    <td>{p.title}</td>
                                    <td>{p.like}</td>
                                    <td>
                                        <div className="btn-group mr-2">
                                            <Link to={`admin/products/${p.id}/edit`} 
                                                className="btn btn-sm btn-outline-secondary"
                                            >Edit</Link>
                                            <a href="#" className="btn btn-sm btn-outline-secondary"
                                                onClick={() => del(p.id)}
                                            >Delete</a>
                                            
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                </div>
                
            </div>
        </Wrapper>
    )
}

export default Products;