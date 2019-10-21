import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import Isi from './Isi';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name='bars' />
            </Button>
          </Left>
          <Body>
            <Title>NEWS APPS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
        <Content>

         
          <Image source={require('../images/balloon.jpeg')} style={{height: 200, width: null, flex: 1}}/>
          <Text style={{fontSize:20, textAlign: "center"}}>Trending</Text>

          <Isi />

        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon type="FontAwesome" name="home" />
            </Button>
            <Button onPress={()=>Actions.profile()}>
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