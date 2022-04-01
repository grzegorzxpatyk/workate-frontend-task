import { useEffect, useState } from 'react';
import Results from './components/Results';
import './App.scss';

export default function App() {
    let [data, setData] = useState([]);
    let [photos, setPhotos] = useState([]);
    let [quantity, setQuantity] = useState(3);

    async function fetchData(url) {
        const request = await fetch(url);
        const response = await request.json();
        setData(response);
        setPhotos(response.slice(0, quantity));
        setQuantity(6);
    }

    function nextPhotos() {
        if (photos.length >= data.length) {
            return;
        }
        setPhotos(data.slice(0, quantity));
        setQuantity((prev) => prev + 3);
    }

    useEffect(() => {
        fetchData('https://picsum.photos/v2/list');
        console.log(data);
        return () => {
            setPhotos([]);
        };
    }, []);

    useEffect(() => {
        console.log(quantity);
    }, [quantity]);

    return (
        <div className="app">
            <h1 className="app-logo">workate-frontend-task</h1>
            <button className="btn" onClick={nextPhotos}>
                Next photos
            </button>
            <Results photos={photos} />
        </div>
    );
}
