import React, { useState } from 'react';

import { Container, SidebarSize, IconClose, Content } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Grid, Sidebar } from 'semantic-ui-react';
import { Categorie } from '../../sidebar/styles';
import { categories } from '../../sidebar/helper';

import { useHistory } from 'react-router-dom';

const MobileCategories = () => {
  const [visible, setVisible] = useState(false);

  const history = useHistory();

  return (
    <Container>
      <Grid columns={1}>
        <Grid.Column>
          <GiHamburgerMenu onClick={() => setVisible(!visible)} />
        </Grid.Column>

        <Grid.Column>
          <Sidebar
            as={SidebarSize}
            animation="overlay"
            icon="labeled"
            onHide={() => setVisible(false)}
            vertical
            visible={visible}>
            <IconClose onClick={() => setVisible(false)} />
            <Content>
              {categories.map((item, index) => (
                <Categorie
                  className={item.classStyle}
                  key={index}
                  onClick={() => history.push(`/category/${item.name.toLocaleLowerCase()}`)}>
                  <item.icon className="icon-style" /> {item.name}
                </Categorie>
              ))}
              <h4> Ver todas as categorias </h4>
            </Content>
          </Sidebar>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MobileCategories;
