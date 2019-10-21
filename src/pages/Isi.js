import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, Grid, Col, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Isi extends Component {
  render() {
    return (
      

          <View padder>
            <Card style={{borderRadius:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid>
                  <Col style={{height:100, width: '35%'}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
                  </Col>
                  <Col style={{padding:10}}>
                    <Body>
                      <Text>Akademik</Text>
                      <H3>Judul Berita Hari Ini</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid>
                  <Col style={{height:100, width: '35%'}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
                  </Col>
                  <Col style={{padding:10}}>
                    <Body>
                      <Text>Akademik</Text>
                      <H3>Judul Berita Hari Ini</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid>
                  <Col style={{height:100, width: '35%'}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
                  </Col>
                  <Col style={{padding:10}}>
                    <Body>
                      <Text>Akademik</Text>
                      <H3>Judul Berita Hari Ini</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid>
                  <Col style={{height:100, width: '35%'}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
                  </Col>
                  <Col style={{padding:10}}>
                    <Body>
                      <Text>Akademik</Text>
                      <H3>Judul Berita Hari Ini</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid>
                  <Col style={{height:100, width: '35%'}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
                  </Col>
                  <Col style={{padding:10}}>
                    <Body>
                      <Text>Akademik</Text>
                      <H3>Judul Berita Hari Ini</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>
          </View>
          
          
    );
  }
}