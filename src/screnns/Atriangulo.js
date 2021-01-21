import React, {useState}  from 'react';
import {SafeAreaView,  ImageBackground, TextInput, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Atriangulo from '../fundo/Atriangulo.jpg'

import {
  AdMobBanner,
  } from 'expo-ads-admob'

import Fbutton from '../fundo/cores-de-fundo.jpg'
import Aretangulo from'../fundo/Aretangulo.jpg'

export default props => {

  const [result, setResult] = useState('b x h')
  const [altura, setAltura] = useState('h')
  const [base, setBase] = useState('b')
  

  function calc() {
    if (isNaN(base) === true || isNaN(altura) ===true) {return window.alert('Digite novamente com o ponto no lugar da vírgula ou digite apenas um ponto.')}
    else{setResult(eval(`${altura}*${base}/2`))}
  
    
  }

  return (
   <SafeAreaView style={styles.container} >
    
    <View style={styles.container}>
     
    <View style={{flexDirection: 'row'}}>

    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="digite a base"
    onChangeText={(e)=>setBase(Number(e))}/></View>
    
    <View style={{width:20}}></View>

    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="digite a altura"
    onChangeText={(e)=>setAltura(Number(e))}/></View>
    

    </View>
    <View style={styles.input}></View>
    <TouchableOpacity  onPress={
      () => {calc()}
    }>
      <ImageBackground source={Fbutton} style={styles.button1} >
      <Text style={styles.button}>Calcular área</Text>
    </ImageBackground>
    </TouchableOpacity>
    
    
    <View style={styles.input}></View>
    
   
    <Text style={styles.text}> A = ({base} x {altura}) / 2 </Text>
    <Text style={styles.text}> A área do triângulo é igual a {result}. </Text>

    <Text style={{ backgroundColor: '#0096ff', fontSize: 25,
    justifyContent: 'space-between',
    color:'#ffffff', height:35, textAlign:'center', borderWidth: 2, borderRadius: 3, borderColor: '#0096ff'}}>A = {result}</Text>
    
    <Image source={Atriangulo} style={styles.fundo} /> 

    <Text style={styles.text}>Para calcular a área do triângulo aplicamos a fórmula:</Text>
    <Text style={styles.text}> A= (b x h) / 2 </Text>
    <Text style={styles.text}> Onde b é a base e h é a altura.</Text>
    </View>

    
    <View style={styles.input}></View>
    <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7566475912528601/6131327414" 
          servePersonalizedAds 
          onDidFailToReceiveAdWithError={ (err) => console.log(err)} />
    <View style={styles.input1}></View>
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
    height: 10,
    width: 20,
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
    width: Dimensions.get('window').width*7/10, 
    alignItems: 'center'
  },
  viewInput: {
    borderWidth:2, 
    borderRadius: 4, 
    borderColor: '#0096ff',
    width: Dimensions.get('window').width*4/10,
  },
 
})
