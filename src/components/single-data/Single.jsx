import React from 'react';

const Single = (props) => {
    let { country, id, image, trade_volume_24h_btc, trust_score, url } = props.single
    // console.log(url);
    return (
        <div className='w-56 p-3      shadow-lg mt-5 ml-5 mr-5 rounded-md text-center'>
            <div>
                {/* <img  src={image}  alt="" /> */}
                <a href={url}><img className='cursor-pointer w-20 rounded-md mx-auto pt-5' src={image} alt="" /></a>
            </div>
            <div>
                <h5 className='text-lg font-bold'>{country}</h5>
                <h5 className='text-lg font-bold'> name :{id}</h5>
                {/* <h5 className='text-lg font-bold'   > {trade_volume_24h_btc}</h5> */}
                {/* <h5 className='text-lg font-bold'   > trust :{trust_score}</h5> */}
                {/* <a href={url}>url</a> */}
                {/* <h5>{}</h5> */}
            </div>
        </div>
    );
};

export default Single;