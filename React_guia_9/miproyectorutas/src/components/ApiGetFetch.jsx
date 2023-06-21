import React, { useState, useEffect} from "react";
import Button from "react-bootstrap/Card";
import "../App.css"

function ApiGetFetch() {
    const [data, setData ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);
    return (
        <div className="container">
            <h1>Articulos</h1>
            <div className="pos">
                {data.map((post) => (
                 <Card style={{ width: "20rem",margin: "15px", alignItems: "center", padding: "8px"}}>
                   <Card.Img
                   src={post.image}
                   style={{ width: "4rem"  }}
                   />
                 <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>$ {post.price}</Card.Text>
                    <Card.Text>{post.description}</Card.Text>
                 </Card.Body>
                 <Button variant="primary" style={{width: "100%"}}>Add Carrito</Button>
                 </Card>
                ))}
            </div>
        </div>

    );
}
    