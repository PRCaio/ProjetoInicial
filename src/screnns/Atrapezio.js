import React, {useState}  from 'react';
import {SafeAreaView,  ImageBackground, TextInput, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AAcirculo from '../fundo/Acirculo.jpg'

import {
  AdMobBanner,
  } from 'expo-ads-admob'

import Atrapezio from '../fundo/Atrapezio.jpg'
import Fbutton from '../fundo/cores-de-fundo.jpg'

export default props => {

  const [result, setResult] = useState('[(b + B) . h] / 2')
  const [altura, setAltura] = useState('h')
  const [base, setBase] = useState('b')
  const [baseM, setBaseM] = useState('B')
  

  function calc() {
    if (isNaN(base) === true || isNaN(altura) ===true || isNaN(baseM)===true) {
    return window.alert('Digite novamente com o ponto no lugar da vírgula ou digite apenas um ponto.')}
    else {setResult(
      
      eval(`${altura}*(${base}+${baseM}) /2`))
    }
    
  }

  return (
    <SafeAreaView style={styles.container} >
    
    <View style={styles.container}>
     
    <View style={{flexDirection: 'row'}}>

    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="base menor"
    onChangeText={(e)=>setBase(Number(e))}/></View>
    
    <View style={{width:20}}></View>

    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="base maior"
    onChangeText={(e)=>setBaseM(Number(e))}/></View>
    

    </View>
    <View style={styles.input}></View>

    <View style={styles.viewInput}><TextInput style={{textAlign: 'center', backgroundColor:'#f0f8ff', fontSize:22, height: 40}} keyboardType='numeric' placeholder="digite a altura"
    onChangeText={(e)=>setAltura(Number(e))}/></View>
<View style={styles.input}></View>
    <TouchableOpacity  onPress={
      () => {calc()}
    }>
      <ImageBackground source={Fbutton} style={styles.button1} >
      <Text style={styles.button}>Calcular área</Text>
    </ImageBackground>
    </TouchableOpacity>
    
    
    <View style={styles.input}></View>
    
   
    <Text style={styles.text}> A = [({base} + {baseM}) x {altura}] / 2 </Text>
    <Text style={styles.text}> A área do trapézio é igual a {result}. </Text>

    <Text style={{ backgroundColor: '#0096ff', fontSize: 25,
    justifyContent: 'space-between',
    color:'#ffffff', height:35, textAlign:'center', borderWidth: 2, borderRadius: 3, borderColor: '#0096ff'}}>A = {result}</Text>
    
    <Image source={Atrapezio} style={styles.fundo} /> 

    <Text style={styles.text}>Para calcular a área do trapézio aplicamos a fórmula:</Text>
    <Text style={styles.text}> A = [(b + B) x h] / 2 </Text>
    <Text style={styles.text}> Onde b é a base menor, B é a base maior e h é a altura. </Text>
 
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
    width: Dimensions.get('window').width*8/10, 
    alignItems: 'center'
  },
  viewInput: {
    borderWidth:2, 
    borderRadius: 4, 
    borderColor: '#0096ff',
    width: Dimensions.get('window').width*4/10,
  },
 
})
