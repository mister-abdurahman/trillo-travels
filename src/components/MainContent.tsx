import img1 from '../assets/img/hotel-1.jpg';
import img2 from '../assets/img/hotel-2.jpg';
import img3 from '../assets/img/hotel-3.jpg';
import recommend1 from '../assets/img/user-3.jpg';
import recommend2 from '../assets/img/user-4.jpg';
import recommend3 from '../assets/img/user-5.jpg';
import recommend4 from '../assets/img/user-6.jpg';
import theSVG from '../assets/img/sprite.svg';


export default function MainContent(){
    return <main className="hotel-view">
        <div className="gallery">
            <figure className="gallery__item">
                <img src={img1} alt="" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={img2} alt="" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={img3} alt="" className="gallery__photo" />
            </figure>
        </div>

        <div className="overview">
            <div className="overview__heading">Hotel Las Palmas</div>
            <div className="overview__stars">
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${theSVG}#icon-star-full`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${theSVG}#icon-star-full`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${theSVG}#icon-star-full`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${theSVG}#icon-star-full`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${theSVG}#icon-star-full`}></use>
                </svg>
            </div>

            <div className="overview__location">
                <svg className='overview__icon-location'>
                    <use xlinkHref={`${theSVG}#icon-location`}></use>
                </svg>
                <button className="btn-inline">Lagos, Nigeria</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>
        <div className="detail">
            <div className="description">
                <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore officia placeat repudiandae atque tenetur unde totam aliquam, in, dolorem iure veniam eum soluta doloremque nostrum velit et fugiat quis recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima, provident harum inventore possimus tenetur sint id reprehenderit, ipsa totam suscipit debitis dicta dolores ipsum nulla! Molestias iste repellendus corrupti?</p>
                <ul className='list'>
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast Included</li>
                    <li className="list__item">Free Airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">Juan and 3 others recommend this hotel</p>
                    <div className="recommend__friends">
                        <img src={recommend1} alt="photo 1" className='recommend__photo'/>
                        <img src={recommend2} alt="photo 2" className='recommend__photo'/>
                        <img src={recommend3} alt="photo 3" className='recommend__photo'/>
                        <img src={recommend4} alt="photo 4" className='recommend__photo'/>
                    </div>
                </div>
            </div>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className='review__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, tempora, sapiente at soluta dolorum ipsum expedita officia libero cum minus nihil ad repellendus! Temporibus rem provident autem, vero odit quas?</blockquote>
                    <figcaption className='review__user'>
                        <img className="review__user-photo" src={recommend2} alt="" />
                        <div className="review__user-box">
                            <h3 className="review__user-name">Adam Anwar</h3>
                            <p className="review__user-date">Mar 21st, 2023</p>
                        </div>
                        <p className="review__user-rating">7.8</p>
                    </figcaption>
                </figure>

                <figure className="review">
                    <blockquote className='review__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, tempora, sapiente at ad repellendus!</blockquote>
                    <figcaption className='review__user'>
                        <img className="review__user-photo" src={recommend3} alt="" />
                        <div className="review__user-box">
                            <h3 className="review__user-name">Abdullah Amir</h3>
                            <p className="review__user-date">Oct 16th, 2023</p>
                        </div>
                        <p className="review__user-rating">9.3</p>
                    </figcaption>
                </figure>

                <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>
        </div>
        <div className="cta">
            <h2 className="cta__book-now">Good news! We have 4 rooms left for your selected dates!</h2>
            <button className="cta__btn"><span className='cta__btn--visible'>Book Now</span> <span className='cta__btn--invisible'>Only 4 rooms left</span></button>
        </div>
        </main>
}