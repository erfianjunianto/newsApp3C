import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{Actions.home()}}>
              <Icon type="FontAwesome" name='chevron-left' />
            </Button>
          </Left>
          <Body>
            <Title>PROFILE</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>

        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon type="FontAwesome" name="home" />
            </Button>
            <Button>
              <Icon type="FontAwesome" name="user" />
            </Button>
            <Button>
              <Icon type="FontAwesome" name="gear" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}