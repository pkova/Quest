import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  topHalfContainer: {
    flex: 0.58,
    flexDirection: 'row'
  },
  scoreContainer: {
    flex: 0.8,
    fontSize: 20,
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1
  },
  tagsContainer: {
    paddingTop: 4,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  tagExploding: {
    backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5,
    opacity: 1
  },
  tagDone: {
    backgroundColor: '#03a9f4',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5,
    opacity: 0.3
  },
  tagNotDone: {
    backgroundColor: '#03a9f4',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5,
    opacity: 1
  },
  tagTextNotDone: {
    fontSize: 20,
    color: 'white'
  },
  tagTextDone: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'line-through'
  },
  tagTextExploding: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'line-through'
  },
  scoreText: {
    fontSize: 20
  },
  scoreboard: {
    fontSize: 20
  },
  image: {
    height: 220,
    width: 210
  }
});

export { styles };
