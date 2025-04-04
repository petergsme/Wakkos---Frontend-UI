export const Button = (props) => {
  const { type, icon, alt } = props;
  return (
    <button className={type}>
      <img className="sidebar__icon" src={icon} alt={alt} />
    </button>
  );
};

// <button className="card__button">
//   <img className="sidebar__icon" src={logOutIcon} alt="icono cerrar sesión" />
// </button>;
