import logo from '../assets/img/logo.png';
import userPhoto from '../assets/img/user.jpg';
import theSVG from '../assets/img/sprite.svg';

export default function Header(){
    return <header className="header">
        <img src={logo} alt="trillo logo" className='logo'/>
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels"/>
            <button className='search__button'>
                <svg className='search__icon'>
                    <use xlinkHref={`${theSVG}#icon-search`}></use> //this approach only works on a web server
                </svg>
            </button>
        </form>
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${theSVG}#icon-bookmark`}></use>
                </svg>
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${theSVG}#icon-chat`}></use>
                </svg>
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src={userPhoto} alt="" className='user-nav__user-photo'/>
                <span className='user-nav__user-name'>Jonas</span>
            </div>
        </nav>
    </header>
}
