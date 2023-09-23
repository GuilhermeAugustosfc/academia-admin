import { Text, View } from 'react-native'
import { styles } from '../../styles'
import { getMonth } from './util'
import { INITIAL_DATA } from '../../data'
import { Icon } from 'react-native-elements'

export function Menu() {
  const calcTotalRecebido = (): { recebeu: number; aReceber: number } => {
    return INITIAL_DATA.reduce(
      (total, item) => {
        if (item.payment) {
          total.recebeu += 80
        } else {
          total.aReceber += 80
        }
        return total
      },
      { recebeu: 0, aReceber: 0 }
    )
  }

  const total = calcTotalRecebido()
  return (
    <View style={styles.navbar}>
      <View style={styles.navItem}>
        <Text style={styles.navText}>{getMonth()}</Text>
      </View>
      <View style={styles.navItem}>
        <Icon
          size={30}
          style={styles.itemText}
          name="credit-card"
          type="font-awesome"
          color={'green'}
        />
        <Text style={styles.navText}>{total.recebeu}</Text>
      </View>
      <View style={styles.navItem}>
        <Icon
          size={30}
          style={styles.itemText}
          name="credit-card"
          type="font-awesome"
          color={'red'}
        />
        <Text style={styles.navText}>{total.aReceber}</Text>
      </View>
    </View>
  )
}
