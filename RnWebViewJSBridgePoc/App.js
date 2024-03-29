import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const URL = 'http://localhost:3000/'

const App = () => {

  const runFirst = `
    window.ThirdPartyWVToNativeChaseJSBridgeHandler = {
      getPDFDocument: function(obj){
        alert("from mobile: " + obj.url);
      }
    };
    true;
  `

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView 
          source={{ uri: URL }}
          onLoad={console.log('Loaded')}
          javaScriptEnabled={true}
          injectedJavaScript={runFirst}
          onMessage={(event) => {}}
          ref={() => {}}
        />
      </View>
    </View>
  )
}

export default App