import theSVG from '../assets/img/sprite.svg';

export default function Sidebar(){
    return <nav className="sidebar">
        <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active"><a href="" className="side-nav__link"><svg className="side-nav__icon"><use xlinkHref={`${theSVG}#icon-home`}></use></svg><span>Hotel</span></a></li>
            <li className="side-nav__item"><a href="" className="side-nav__link"><svg className="side-nav__icon"><use xlinkHref={`${theSVG}#icon-aircraft-take-off`}></use></svg><span>Flight</span></a></li>
            <li className="side-nav__item"><a href="" className="side-nav__link"><svg className="side-nav__icon"><use xlinkHref={`${theSVG}#icon-key`}></use></svg><span>Car Rental</span></a></li>
            <li className="side-nav__item"><a href="" className="side-nav__link"><svg className="side-nav__icon"><use xlinkHref={`${theSVG}#icon-map`}></use></svg><span>Tours</span></a></li>
        </ul>

        <div className="legal">&copy; 2023 by Abdurahman. All rights resreved</div>
    </nav>
}