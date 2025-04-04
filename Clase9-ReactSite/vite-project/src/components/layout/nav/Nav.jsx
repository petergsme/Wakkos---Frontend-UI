import './nav.css';
import '../../layout/sidebar/sidebar.css';
import calendar from '../../../assets/calendar-icon.svg';
import fileArchive from '../../../assets/file-archive-icon.svg';

export const Nav = () => {
  return (
    <>
      <nav className="main-nav">
        <h3 className="nav__title">Delegate Courses</h3>
        <ul className="nav__list">
          <li>
            <a href="">
              <img className="sidebar__icon" src={calendar} alt="calendar icon" />
              Upcoming
            </a>
          </li>
          <li>
            <a href="">
              <img className="sidebar__icon" src={fileArchive} alt="archives box icon" />
              Past
            </a>
          </li>
        </ul>

        <h3 className="nav__title">Trainer Courses</h3>
        <ul className="nav__list">
          <li>
            <a href="">
              <img className="sidebar__icon" src={calendar} alt="calendar icon" />
              Upcoming
            </a>
          </li>
          <li>
            <a href="">
              <img className="sidebar__icon" src={fileArchive} alt="archives box icon" />
              Past
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
