import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737',
    borderWidth: 1,
    borderColor: '#373737',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#eee',
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#eee',
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    margin: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#eee'
  },

  footer: {
    backgroundColor: '#515151',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#eee',
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#04d361',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  }
});

export default styles;