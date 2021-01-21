import React from 'react';
import { View, Button, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Circulo from './screnns/Circulo'
import Aretangulo from './screnns/Aretângulo'
import Aparalelogramo from './screnns/Aparalelogramo'
import Atrapezio from './screnns/Atrapezio'
import Atriangulo from './screnns/Atriangulo'

import Pcircunferencia from './screnns/Pcircunferencia'
import Pquadrado from './screnns/Pquadrado'
import Pretangulo from './screnns/Pretangulo'
import Ptriangulo from './screnns/Ptriangulo'
import Ppoligonon from './screnns/Ppoligonon'

import Fbutton from './fundo/cores-de-fundo.jpg'

import {
  AdMobBanner,
  } from 'expo-ads-admob'
import { State } from 'react-native-gesture-handler';


function Inicial({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      
      <TouchableHighlight  onPress={() => navigation.navigate('Área')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton1}>
      <Text style={styles.text}>ÁREA</Text>
      <Text style={styles.text1}>Área é um conceito matemático que pode ser definida como quantidade de espaço bidimensional, ou seja, de superfície.</Text>
      </ImageBackground>
      </TouchableHighlight>
      
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton1}>
      <Text style={styles.text}>PERÍMETRO</Text>
      <Text style={styles.text1}>Perímetro é a linha que forma o contorno de uma figura traçada num plano ou numa superfície, ou seja, soma de lados de uma figura.</Text>
      </ImageBackground>
      </TouchableHighlight>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7566475912528601/6131327414" 
          servePersonalizedAds 
          onDidFailToReceiveAdWithError={ (err) => console.log(err)} />
      
    </View>

  )
}

function Areas({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Área do círculo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>CÍRCULO</Text>
      <Text style={styles.text1}>O círculo é uma figura geométrica formada por uma parte de um plano que é limitada por uma circunferência.</Text>
      </ImageBackground>

      </TouchableHighlight>
      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Área do quadrado e retângulo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>RETÂNGULO E QUADRADO</Text>
      <Text style={styles.text1}>Retângulo é uma figura geométrica formada por 4 lados (quadrilátero), cujos ângulos internos são todos retos.</Text>
      <Text style={styles.text1}>Quadrado é retângulo com todos os lados iguais.</Text>
      </ImageBackground>
      </TouchableHighlight>
      
      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Área do paralelogramo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>PARALELOGRAMO</Text>
      <Text style={styles.text1}>O paralelogramo é uma figura geométrica plana que possui 4 lados (quadrilátero), sendo que os lados opostos são paralelos.</Text>
      </ImageBackground>
      </TouchableHighlight>

      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Área do triângulo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>TRIÂNGULO</Text>
      <Text style={styles.text1}>O triângulo é uma figura geométrica que possui três segmentos de reta concorrentes, dois a dois, em três pontos diferentes formando três lados. </Text>
      </ImageBackground>
      </TouchableHighlight>

      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Área do trapézio')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>TRAPÉZIO</Text>
      <Text style={styles.text1}>O trapézio é uma figura geométrica plana pertencente ao grupo dos quadriláteros que possui um par de lados paralelos. </Text>
      </ImageBackground>
      </TouchableHighlight>     
      
      </ScrollView>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7566475912528601/6131327414" 
          servePersonalizedAds 
          onDidFailToReceiveAdWithError={ (err) => console.log(err)} />
    </View>

  )
}

function Perimetros({navigation}) {
  return (
    <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <ScrollView > 
      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro da circunferência')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>CÍRCUNFERÊNCIA</Text>
      <Text style={styles.text1}>Circunferência é uma figura geométrica pertencente ao plano que é constituída pelo conjunto de todos os pontos igualmente distantes de um ponto fixo desse plano.</Text>
      </ImageBackground>
      </TouchableHighlight>

      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro do retângulo e paralelogramo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton1}>
      <Text style={styles.text}>RETÂNGULO E PARALELOGRAMO</Text>
      <Text style={styles.text1}>O paralelogramo é uma figura geométrica plana que possui 4 lados (quadrilátero), sendo que os lados opostos são paralelos.</Text>
      <Text style={styles.text1}>Retângulo é uma figura geométrica formada por 4 lados (quadrilátero), cujos ângulos internos são todos retos.</Text>
      </ImageBackground>
      </TouchableHighlight>

      
      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro do quadrado')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>QUADRADO</Text>
      <Text style={styles.text1}>Quadrado é um retângulo com todos os lados iguais.</Text>
      </ImageBackground>
      </TouchableHighlight>
      
      

      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro do triângulo')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>TRIÂNGULO</Text>
      <Text style={styles.text1}>O triângulo é uma figura geométrica que possui três segmentos de reta concorrentes, dois a dois, em três pontos diferentes formando três lados. </Text>
      </ImageBackground>
      </TouchableHighlight>

      <View style={{height:10, width:50}}></View>
      <TouchableHighlight  onPress={() => navigation.navigate('Perímetro do polígono com n lados')}>
      <ImageBackground source={Fbutton} style={styles.Fbutton}>
      <Text style={styles.text}>Polígono regular com n lados</Text>
      <Text style={styles.text1}>O polígono regular é uma figura geométrica com todos os lados e ângulos internos iguais. </Text>
      </ImageBackground>
      </TouchableHighlight>     
      
      </ScrollView>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-7566475912528601/6131327414" 
          servePersonalizedAds 
          onDidFailToReceiveAdWithError={ (err) => console.log(err)} />
      
    </View>

  )
}

function AreaCirculo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Circulo/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Aaretangulo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Aretangulo />           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Aaparalelogramo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Aparalelogramo />           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Aatriângulo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Atriangulo />           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Aatrapezio({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Atrapezio />           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Ppcircunferencia({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Pcircunferencia/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}
function Ppquadrado({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Pquadrado/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Ppretangulo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Pretangulo/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}
function Pptriangulo({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Ptriangulo/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}

function Pppoligonon({navigation}) {
  return (
    <View style={{backgroundColor: '#778899', justifyContent: 'space-between', }}>
     <Ppoligonon/>           
     <View style={{backgroundColor: '#778899', height:30, width:50}}></View>         
    </View>
  )
}




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora de áreas e perímetros" component={Inicial}/>

        <Stack.Screen name="Área" component={Areas}/>
        <Stack.Screen name="Perímetro" component={Perimetros}/>
        
        <Stack.Screen name="Área do quadrado e retângulo" component={Aaretangulo} />
        <Stack.Screen name="Área do círculo" component={AreaCirculo} />
        <Stack.Screen name="Área do paralelogramo" component={Aaparalelogramo} />
        <Stack.Screen name="Área do triângulo" component={Aatriângulo} />
        <Stack.Screen name="Área do trapézio" component={Aatrapezio} />

        <Stack.Screen name="Perímetro da circunferência" component={Ppcircunferencia} />
        <Stack.Screen name="Perímetro do quadrado" component={Ppquadrado} />
        <Stack.Screen name="Perímetro do retângulo e paralelogramo" component={Ppretangulo} />
        <Stack.Screen name="Perímetro do triângulo" component={Pptriangulo} />
        <Stack.Screen name="Perímetro do polígono com n lados" component={Pppoligonon} />        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  container:{
      flex: 1
  },
  backgound: {
      flex:3
  },
  taskList: {
      flex: 7
  },
  fundo: {
    height: Dimensions.get('window').width*5/10,
    width: Dimensions.get('window').width*7.5/10, 
    alignItems: 'center'
  },
  Fbutton: {
    height: Dimensions.get('window').height*1/5,
    width: Dimensions.get('window').width*9/10,
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 2,
    borderLeftWidth: 2,
    borderRightWidth: 5,
    borderColor: '#0096ff',
    
  },
  Fbutton1: {
    height: Dimensions.get('window').height*3/10,
    width: Dimensions.get('window').width*9/10,
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 2,
    borderLeftWidth: 2,
    borderRightWidth: 5,
    borderColor: '#0096ff',
    
  },
  text: {
    color:'#f0f8ff',
    fontSize: 22,
    padding: 10  
  },
  text1: {
    color:'#f0f8ff',
    fontSize: 12,
    padding: 10  
  }
})