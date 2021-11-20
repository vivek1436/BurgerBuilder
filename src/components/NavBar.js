import React, { useState } from 'react';
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import Toggle from 'rsuite/Toggle';
import GridIcon from '@rsuite/icons/Grid';
import DraftRoundIcon from '@rsuite/icons/DraftRound';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  return (
    <div>
      <div style={{ width: '240%', paddingTop: '2%' }}>
        <Toggle
          onChange={setExpanded}
          checked={expanded}
          checkedChildren='Hide Menu'
          unCheckedChildren='Show Menu'
        />
        <hr />
        <Sidenav
          expanded={expanded}
          defaultOpenKeys={['3', '4']}
          activeKey={activeKey}
          onSelect={setActiveKey}
        >
          <Sidenav.Body>
            <Nav>
              <Nav.Item
                eventKey='1'
                icon={<DraftRoundIcon spin style={{ fontSize: '1em' }} />}
              >
                <Link to='/'>McLolnalds</Link>
              </Nav.Item>

              <Nav.Item
                style={{
                  textDecoration: 'none',
                }}
                eventKey='2'
                icon={<GridIcon />}
              >
                <Link to={'/about'}>About Us</Link>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
};

export default NavBar;
