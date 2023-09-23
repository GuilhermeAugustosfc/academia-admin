import { View, Text } from 'react-native'
import { Item } from '../../App'
import { Icon } from 'react-native-elements'
import { styles } from '../../styles'

interface ListItemProps {
  item: Item
}

export function ListItem({ item }: ListItemProps) {
  const highlith = {
    height: 100,
    elevation: 6, // Sombra para dispositivos Android
    shadowColor: 'black', // Cor da sombra para dispositivos iOS
    shadowOffset: { width: 0, height: -2 }, // Deslocamento da sombra para dispositivos iOS
    shadowOpacity: 1, // Opacidade da sombra para dispositivos iOS
    shadowRadius: 2, // Raio da sombra para dispositivos iOS
  }

  const boldUser = {
    fontWeight: '500',
  }

  const style = item.payment ? {} : highlith
  const textUser = item.payment ? {} : boldUser
  return (
    <View key={item.id} style={[styles.item, style]}>
      <View style={[styles.bagde, { width: 150 }]}>
        <Text style={[styles.textUser, textUser]}>{item.name}</Text>
      </View>
      <View style={styles.bagde}>
        <Icon
          size={20}
          style={styles.itemText}
          name="calendar"
          type="font-awesome"
        />
        <Text style={styles.itemText}>{item.date_cadastro}</Text>
      </View>
      <View style={styles.bagde}>
        <Icon
          size={20}
          style={styles.itemText}
          name="credit-card"
          type="font-awesome"
          color={item.payment ? 'green' : 'red'}
        />
      </View>
    </View>
  )
}
