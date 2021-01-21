import React, {useState}  from 'react';
import {SafeAreaView,  ImageBackground, TextInput, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AAcirculo from '../fundo/Acirculo.jpg'

import {
  AdMobBanner,
  } from 'expo-ads-admob'


import Fbutton from '../fundo/cores-de-fundo.jpg'

export default props => {

  
  
  const [result, setResult] = useState('r²')
  const [raio, setRaio] = useState('r')
  const [unidade, setRe] = useState('')
  const pi = '3.14'

  function calc() {
    if (isNaN(raio) === true) {return window.alert('Digite novamente com o ponto no lugar da vírgula ou digite apenas um ponto.')}
    else{
    setResult(eval(`2*${raio} * ${pi}`).toFixed(2))}
    
    
  }

 

  return (
   <SafeAreaView style={styles.container} >
    
    <View style={styles.container}>
     
    <View style={styles.input}></View>
    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="Raio do círculo"
    onChangeText={(e)=>setRaio(Number(e))}/></View>
    <View style={styles.input}></View>
    <TouchableOpacity  onPress={
      () => {calc()}
    }>
      <ImageBackground source={Fbutton} style={styles.button1} >
      <Text style={styles.button}>Calcular perímetro</Text>
    </ImageBackground>
    </TouchableOpacity>
    
    <Text style={styles.text}>P = 2 . 3,14 . {raio}  </Text>
    <Text style={styles.text}>O perímetro da circunferência é igual a: </Text>
    <View style={{backgroundColor: '#2f4f4f'}}></View>
    <Text style={{ backgroundColor: '#0096ff', fontSize: 25,
    justifyContent: 'space-between',
    color:'#ffffff', height:35, textAlign:'center', borderWidth: 2, borderRadius: 3, borderColor: '#0096ff'}}>P = {result}</Text>
    
    <Image source={AAcirculo} style={styles.fundo} /> 
    <Text style={styles.text}>Para calcular o perímetro da circunferência aplicamos a fórmula:</Text>
    <Text style={styles.text}> P = 2 . π . r </Text>
    <Text style={styles.text}> Onde π vale aproximadamente 3,14 </Text>
    <Text style={styles.text}> E r é o raio da circunferência. </Text>
    <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7566475912528601/6131327414" 
          servePersonalizedAds 
          onDidFailToReceiveAdWithError={ (err) => console.log(err)} />
    <View style={styles.input1}></View>
    
    </View>
   

    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 8,
    textAlign: 'center',
    justifyContent: 'space-between'
  },
  paragraph: {
    margin: 24,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 20,
    width: 50,
  },
  input1: {
    height: 2000,
    width: 50,
  },
  button:{
    fontSize: 20,
    height: 30,
    width: 200,
    color:'#f0f8ff',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#7fffd4',
    borderRadius: 5,
    

  },
  button1:{
    
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#0096ff',
    

  },
  text:{
    fontSize: 16,
    justifyContent: 'space-between',
    color:'#696969',
    textAlign: 'center'
    

  },
  backgound: {
    flex:3
  },
  fundo: {
    height: Dimensions.get('window').width*3/10,
    width: Dimensions.get('window').width*3/10, 
    alignItems: 'center'
  },
  viewInput: {
    borderWidth:3, 
    borderRadius: 4, 
    borderColor: '#0096ff',
    width: Dimensions.get('window').width*5/10,
  },
 
})
