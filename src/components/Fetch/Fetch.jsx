import React, { useEffect, useState } from 'react';
import Single from '../single-data/Single';

const Fetch = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        let url = `https://api.coingecko.com/api/v3/exchanges`
        fetch(url)
            .then(res => res.json())
            .then((data) => setApi(data))

    }, [])
    console.log(api);
    return (
        <div>
            <div className='grid    md:grid-cols-6 '>
                {
                    api.slice(0, 50).map(res => <Single

                        key={res.trust_score_rank}
                        single={res}
                    ></Single>)
                }
            </div>
        </div>
    );
};

export default Fetch;