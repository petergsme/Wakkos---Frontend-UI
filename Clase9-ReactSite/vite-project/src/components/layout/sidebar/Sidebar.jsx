import './sidebar.css';
import { Card } from '../../ui/card/Card';
import { Nav } from '../nav/Nav';

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <Card title="GRC Solutions" subtitle="Training portal" />
        <Nav />
        <Card title="David Livesey" subtitle="Trainer" />
      </aside>
    </>
  );
};
