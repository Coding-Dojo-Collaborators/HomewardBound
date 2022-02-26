import React from 'react';
import "./adopt.css";


export const DogCat = () => {
    return (
        <div>
            <div className=' adopt'>
                <div className='text-grey title'>
                    <h1>Pets you can Adopt</h1>
                    
                    <div className='imgContainer row'>
                        
                        <figure className='imgContainer column'>
                            <img src="https://static.showit.co/800/Md03Acr1SBSejogO2DPwqg/shared/canine_country_club-30.png" alt="The Bread Dog" width="300" height="300"></img>
                            <figcaption className='text-black'><h1>Cats</h1></figcaption>

                        </figure>
                        <figure className='imgContainer column'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hopsVtpfpOScwYla4Jgj-fYsh6Mhd1s99Q&usqp=CAU" alt="The Bread Dog" width="300" height="300"></img>
                            <figcaption className=''><h1>Dogs</h1></figcaption>
                        </figure>
                    </div>
                </div>



            </div>
        
        </div>






    )
}