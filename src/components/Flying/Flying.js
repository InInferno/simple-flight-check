import React, {Component} from 'react'
import './Flying.css'
import iconArrow from '../../images/arrow.svg'
import iconCalendar from '../../images/calendar.svg'
import imageOne from '../../images/imageOne.jpg'
import imageTwo from '../../images/imageTwo.jpg'
import imageThree from '../../images/imageThree.jpg'
import imageFour from '../../images/imageFour.jpg'
import plane from '../../images/plane.svg'
import arrowRight from '../../images/arrowRight.svg'
import iconLikeActive from '../../images/likeActive.svg'
import iconLike from '../../images/like.svg'
import iconExit from '../../images/iconExit.svg'
import { isLogoutSuccess } from '../../store/actions/actions'
import { flightsFetchData } from '../../store/actions/flights'
import { connect } from "react-redux";


class Flying extends Component {

    constructor(props) {
        super(props);
        this.carusel = React.createRef();
        this.state = {
            like: false
          }
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.isLogin = '';
        this.props.getLogout();
    }

    handleChangeInput = (event) => {
        this.props.getFlights(event.target.value);
        console.log(this.props);
    }

    render() {
        const onScrollHandler = e => {
            if (e.deltaY === 100) {
                this.carusel.current.scrollLeft += 20;
            } else {
                this.carusel.current.scrollLeft -= 20
            }
        }

        const MONTHS = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        const getTransformedDate = date => {
            const timeStamp = new Date(Date.parse(date))
            return `${timeStamp.getDate()} ${MONTHS[timeStamp.getMonth()]}, ${timeStamp.getFullYear()} - ${timeStamp.getHours()}:${timeStamp.getMinutes()}`
        }

        const addTicket = () => {
            this.setState({like: !this.state.like})
        }


        return (
            <>
            <div className="page-flights-bg"></div>
            <p className="logout" onClick={this.logout}>Выйти<img className="icon-logout" src={iconExit} alt='exit'/></p>
            <div className="page-flights">
                <form className="flights">
    
                    <div className="info">
                        <p className="info__text">Вылеты</p>
                        <img className="info__icon-arrow" src={iconArrow} alt='arrow'/>
                        <p className="info__text">SVO - JFK</p>
    
                        <input className="info__date-input" onChange={this.handleChangeInput} type="date" id="davaToday"></input>

                    </div>
    
                     <div className="images" onWheel={e => onScrollHandler(e)} ref={this.carusel}>
                        <img className="images__image" src={imageOne} alt='city' />
                        <img className="images__image" src={imageTwo} alt='city' />
                        <img className="images__image" src={imageThree} alt='city' />
                        <img className="images__image" src={imageFour} alt='city' />
                    </div>
    
                    <div className="favorites">
                        <p className="favorites__text">
                            Добавлено в Избранное:&nbsp;
                            <span className="favorites__num">10</span>
                            &nbsp;рейсов
                        </p>
                    </div>
    
                    <div className="cards">

 
                        
                        {!this.props.flights ? <p className="cards__text-clear">Выберите дату в календаре, чтобы увидеть билеты.</p> 
                        :
                        <div className="card">
                            <div className="card__elipse">
                                <img className="card__plane" src={plane} alt='plane'/>
                            </div>
                            <div className="card__item-data">
                                <p className="card__cities">
                                {this.props.flights.Places[1].CityName} ({this.props.flights.Places[1].SkyscannerCode})
                                    <img className="card__icon-arrow-right" src={arrowRight} alt='arrow right'/>
                                    {this.props.flights.Places[0].CityName} ({this.props.flights.Places[0].SkyscannerCode})
                                </p>
                                <p className='card__time'>{getTransformedDate(this.props.flights.Quotes[0].QuoteDateTime)}</p>
                                <p className='card__time'>{this.props.flights.Carriers[0].Name}</p>
                            </div>
                            <div className="price">
                                <img className="price__heart" onClick={addTicket} src={`${this.state.like ? iconLikeActive : iconLike}`} alt='price__heart'/>
                                <p className="price__price">
                                    Price:&nbsp;
                                    <span className="price__num">{this.props.flights.Quotes[0].MinPrice} {this.props.flights.Currencies[0].Symbol}</span>
                                </p>
                            </div>
                        </div>
                        }

                        {/* Прелоадер */}
                        {(this.props.isFetchStart) &&
                        <div className='preloader'></div>
                        }

                        {/* Блок ошибки */}
                        {(this.props.isFetchError) &&
                        <h2 className='error-block'>{this.props.isFetchError}</h2>
                        } 
    
                        
                    </div>
                </form>
            </div>
            </>
        )
    }

}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getLogout: () => dispatch(isLogoutSuccess()),
    getFlights: (date) => dispatch(flightsFetchData(date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flying);
