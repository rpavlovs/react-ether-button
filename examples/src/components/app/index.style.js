import NewYorkImage from '../../images/newyork.jpg'

export default {
  base: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(36, 36, 36, 0.9)',
    backgroundImage: `url("${NewYorkImage}")`,
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  container: {
    width: 620,
    margin: 50,
  },
  titleText: {
    fontSize: 45,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1,
    textAlign: 'center',
    color: '#ffffff',
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  headingText: {
    fontSize: 33,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: -1,
    textAlign: 'center',
    color: '#ffffff',
  },
  donationAmountText: {
    fontFamily: 'AXIS',
    fontSize: 50,
    fontWeight: '800',
    fontStyle: 'normal',
    letterSpacing: -0.74,
    textAlign: 'center',
    color: '#ffffff',
  },
  button: {
    width: 251,
    height: 76,
    backgroundColor: '#9013fe',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
}
