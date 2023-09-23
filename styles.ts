import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textUser: {
    fontSize: 18,

    textShadowColor: 'lightblue', // Cor da sombra
    textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
    textShadowRadius: 1, // Raio da sombra
  },
  itemText: {
    fontSize: 14,
  },
  bagde: {
    flexDirection: 'row',
    gap: 5,
  },
  navbar: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    elevation: 5, // Sombra para dispositivos Android
    shadowColor: 'black', // Cor da sombra para dispositivos iOS
    shadowOffset: { width: 0, height: -2 }, // Deslocamento da sombra para dispositivos iOS
    shadowOpacity: 0.2, // Opacidade da sombra para dispositivos iOS
    shadowRadius: 2, // Raio da sombra para dispositivos iOS
    alignItems: 'center',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  navText: {
    fontSize: 15,
    fontWeight: '600',

    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
    textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
    textShadowRadius: 1, // Raio da sombra
  },
})
