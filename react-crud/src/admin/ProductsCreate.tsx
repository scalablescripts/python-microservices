import React, { useState } from "react";
import Wrapper from "./Wrapper";


const ProductsCreate = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');



    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await fetch('http://localhost:8000/api/products/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                image,
            }),
        });
    };

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    );
};

export default ProductsCreate;
