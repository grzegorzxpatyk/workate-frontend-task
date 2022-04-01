import React, { useEffect, useState } from 'react';
import './Results.scss';

export default function Results({ photos }) {
    let [reachEnd, setReachEnd] = useState(false);
    useEffect(() => {
        if (photos.length === 30) {
            setReachEnd(true);
        }
    }, [photos]);

    if (photos.length === 0) {
        return <p>No results.</p>;
    } else {
        return (
            <>
                <div className="results-container">
                    {photos.map((element) => (
                        <img
                            src={
                                'http://source.unsplash.com/' +
                                element.url.replace(
                                    'https://unsplash.com/photos/',
                                    ''
                                )
                            }
                            alt={`author: ${element.author}`}
                            key={element.url.replace(
                                'https://unsplash.com/photos/',
                                ''
                            )}
                        />
                    ))}
                </div>
                {reachEnd && <p>These are all the photos</p>}
            </>
        );
    }
}
