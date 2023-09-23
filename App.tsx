import React from 'react'
import { View, FlatList, StatusBar, Text } from 'react-native'
import { INITIAL_DATA } from './data'
import { styles } from './styles'
import { ListItem } from './src/components/ListItem'
import { getMonth } from './src/components/util'
import { Menu } from './src/components/Menu'

export type Item = {
  id: string
  name: string
  date_cadastro: string
  payment: boolean
}

const statusBarHeight = StatusBar.currentHeight || 0

const App = () => {
  // Ordena a array 'pessoas' com base na chave 'idade'
  INITIAL_DATA.sort((itemA, itemB) => {
    if (!itemA.payment && itemB.payment) {
      return -1 // itemA vem antes de itemB
    } else if (itemA.payment && !itemB.payment) {
      return 1 // itemB vem antes de itemA
    } else {
      return 0 // Mantém a ordem original
    }
  })
  return (
    <View style={{ marginTop: statusBarHeight }}>
      <Menu />
      <FlatList
        data={INITIAL_DATA}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default App
