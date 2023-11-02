import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Example = () => {

    return (
        <>
        <h3 className='shuu'>Success Stories</h3>
        <Slide>
            <div className="each-slide-effect">
                <div className='shu'>
                    <h3>Single mom cracks frontend developer jobs</h3><br/>
                    <img src='https://www.sharpener.tech/static/media/Navira.9ed6b0456ba48ad25b13.png'/><br/>
                    <h5>Navira Lobo</h5>
                    <p>Sign up on the platform and watch the onboarding videos to get a clear understanding of the platform and the entire journey.</p>
                </div>
            </div>
            <div className="each-slide-effect">
            <div className='shu'>
                    <h3>Single mom cracks frontend developer jobs</h3><br/>
                    <img src='https://www.sharpener.tech/static/media/Navira.9ed6b0456ba48ad25b13.png'/><br/>
                    <h5>Navira Lobo</h5>
                    <p>Sign up on the platform and watch the onboarding videos to get a clear understanding of the platform and the entire journey.</p>
                </div>
            </div>
            <div className="each-slide-effect">
            <div className='shu'>
                    <h3>Single mom cracks frontend developer jobs</h3><br/>
                    <img src='https://www.sharpener.tech/static/media/Navira.9ed6b0456ba48ad25b13.png'/><br/>
                    <h5>Navira Lobo</h5>
                    <p>Sign up on the platform and watch the onboarding videos to get a clear understanding of the platform and the entire journey.</p>
                </div>
            </div>
        </Slide>
        </>
    );
};

export default Example;