import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Pressable, Modal,Text, TextInput, View,TouchableOpacity,Alert, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [valorproduto, setValorProduto] = useState("")
  const [taxa, setTaxa] = useState("")
  const [tempo, setTempo] = useState("")
  const [valorprodutofuturo, setValorProdutoFuturo] = useState("")
  const [taxafuturo, setTaxaFuturo] = useState("")
  const [parcelas, setParcelas] = useState("")
  const [PrimeiraParcela, setPrimeiraParcela] = useState("")
  const [textofinal,setResultado] = useState('')
  const [modalActive,setmodalActive] = useState(false)
  const handerCalcularFuturo = () =>{

    let resultado = 0
    const primeira = parseInt(PrimeiraParcela)
    const parcela = parseInt(parcelas)

    for (let index =parcela + primeira; index >= primeira; index--) {
      resultado = resultado + (parseFloat(valorprodutofuturo)/parcela) / (1 + (parseFloat(taxafuturo)/100))**index 
    }
      setResultado(`O valor e ${resultado.toFixed(2)}`)
      setmodalActive(true)
  };


  const handerCalcular = () => {
    const resultado = parseFloat(valorproduto) * (1 + (parseFloat(taxa))/100)**tempo
    setResultado(`O valor e ${resultado.toFixed(2)}`)
    setmodalActive(true)
  };
  return (
    <ScrollView>
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Modal
      animationType='slide'
      transparent = {true}
      visible = {modalActive}
      onRequestClose = {() => setmodalActive=(false)}>
        <View style = {styles.outerView}>
          <View style = {styles.modalView}>
            <Text style = {styles.textoresposta}>{textofinal}</Text>
            <Pressable onPress={() => setmodalActive(false)}>
              <Text style = {styles.fechar}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View ><Text style = {styles.subtitle}>Deslocando para o futuro</Text></View>
      
      <View ><Text style = {styles.texto}>Valor do produto - R$</Text></View>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setValorProduto(text.replace(/\D/g,""))}></TextInput>
      <Text style = {styles.texto}>Taxa -(am%)</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setTaxa(text.replace(/\D/g,""))}></TextInput>
      <View><Text style = {styles.texto}>Tempo(m)</Text></View>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
    
      onChangeText={(text) =>setTempo(text.replace(/\D/g,""))}></TextInput>
      <View style = {styles.divbotao}><TouchableOpacity 
      onPress = {handerCalcular}
     
      style = {styles.botao}>
        <Text style = {styles.textocomum}>Calcular</Text>
      </TouchableOpacity></View>
      <Text style = {styles.subtitle}>Deslocando para o presente</Text>
      <View><Text style = {styles.texto}>Valor do Produto</Text></View>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setValorProdutoFuturo(text.replace(/\D/g,""))}></TextInput>
      <View><Text style = {styles.texto}>Taxa</Text></View>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setTaxaFuturo(text.replace(/\D/g,""))}></TextInput>
      <View><Text style = {styles.texto}>Primeira Parcela</Text></View>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setPrimeiraParcela(text.replace(/\D/g,""))}></TextInput>
      <Text style = {styles.texto} >Parcelas</Text>
      <TextInput
      keyboardType='number-pad'
      style = {styles.inputdados}
      onChangeText={(text) =>setParcelas(text.replace(/\D/g,""))}></TextInput>
      <View style = {styles.divbotao}><TouchableOpacity
        onPress = {handerCalcularFuturo}
        style = {styles.botao2}
        >

        <View ><Text style = {styles.textocomum}>Calcular</Text></View>
      </TouchableOpacity></View>
      <StatusBar style="auto" />
    </View></TouchableWithoutFeedback>
    </ScrollView>
  );
}


