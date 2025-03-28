import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                //if (!response.ok) {
                  //  throw new Error('Failed to fetch');
                //}
                //const result = await response.json();
                setData(response.data);
            } 
            catch (error) {
                setError(error.message);
            } 
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading.......</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>POSTS we received</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
