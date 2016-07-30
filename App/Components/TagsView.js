import * as firebase from 'firebase';
import * as _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { styles } from './Styles/TagsStyle';

class TagsView extends Component {

  constructor(props) {
    super(props);
    this.user = firebase.auth().currentUser;
  }

  getTagContainerStyle(tag) {
    if (tag.complete) {
      return styles.completeTagContainer;
    } else {
      return styles.incompleteTagContainer;
    }
  }

  getTagTextStyle(tag) {
    if (tag.complete) {
      return styles.completeTagText;
    } else {
      return styles.incompleteTagText;
    }
  }

  navToGameOver() {
    console.log('navToGameOver', this.props);
    this.props.navigator.push({
      name: 'GameOverView',
      imagePath: this.props.path,
      gameScore: this.props.gameScore,
      picCount: this.props.picCount
    });

    this.props.userRef.ref('tags').once('value', (rawTags) => {
      let tagsObj = rawTags.val();
      let tags = Object.keys(tagsObj);
      let newTags = _.sampleSize(tags, 20);
      console.log(newTags);
      let newState = _.map(newTags, (tag) => {return {tag: tag, done: false}; });
      this.props.changeTags(newState);
      this.props.updateGame(0, 0);
      this.props.userRef.ref('users/' + this.user.displayName.toLowerCase()).set({
        currentTags: newState,
        gameScore: 0,
        picCount: 0
      });
      console.log('started new game');
    });
  }

  render() {
    let testData = [
      {text: 'hi', complete: true},
      {text: 'this', complete: true},
      {text: 'is', complete: false},
      {text: 'fantastic', complete: true},
      {text: 'test', complete: false},
      {text: 'data', complete: true}
    ];

    // TODO: To unhardcode test data, change to this.props.currentTags
    return (
      <View style={styles.mainContainer}>

        <View style={styles.allTags}>
          {testData.map((tag) =>
            <View style={this.getTagContainerStyle(tag)}>
              <Text style={this.getTagTextStyle(tag)}>{tag.text}</Text>
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.navToGameOver.bind(this)}>
            <Text style={styles.buttonText}>End Game and See Results</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

export { TagsView };
