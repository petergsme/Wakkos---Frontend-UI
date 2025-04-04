import './card.css';
import '../../layout/sidebar/sidebar.css';
import userIcon from '../../../assets/user-icon.svg';
import logOutIcon from '../../../assets/log-out-icon.svg';

export const Card = (props) => {
  const { title, subtitle } = props;

  return (
    <>
      <div className="card">
        <img className="card__icon" src={userIcon} alt="icono empresa" />

        <span className="card__text">
          <p className="card__title">{title}</p>
          <p>{subtitle}</p>
        </span>

        <button className="card__button">
          <img className="sidebar__icon" src={logOutIcon} alt="icono cerrar sesión" />
        </button>
      </div>
    </>
  );
};
