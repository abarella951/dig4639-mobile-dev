import React from 'react';

import questions from './questions.json'
import { StyleSheet, Text, Button, View } from 'react-native';

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1


class QuizQuestion extends React.Component {
  render() {
    return<>
    <Text style={styles.Text}>{this.props.question}</Text>
    {this.props.answers.map((v, i) =>
    <Button 
      color="black" title={v.text} onPress={() => this.props.nextQuestion(v.correct)} key={i}
    />)}
    </>
  
  }
}

class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      titleText: "Welcome to my Quiz!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct) {
    console.log("BUTTON PRESSED")
    if(correct){
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestion === questions.length - 1) {
      console.log("DONE")
    } else {
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText:"You answers X",
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion +1
      })
    }
  }
  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'Starting the Quiz',
        counter: this.state.counter +1
      })
    } else {
        this.setState({
          titleText: "Beggining Quiz!",
          currentState: QUESTION_STATE,
          counter: 0
        })
        if(this.state.currentState === TITLE_STATE) {
          this.timer = setInterval(() => this.countdown(), 1000)
          clearInterval(this.timer)
        } else {
          this.setState({titleText:"You answered!"})
        }
        }
      }
    start() {
      console.log("Starting!")
      this.setState({titleText: "Starting the Quiz!", counter: 0})
      this.timer = setInterval(() => this.countdown(), 1000)
    }
    render() {
      return (
        <>
          <Text>{this.timeLimit - this.state.counter}</Text>
          {((this.state.currentState === TITLE_STATE) ?
            <>
            <Text style={styles.Text}>{this.state.titleText}</Text>
            <Button color="#df3ffb" title = "start" onPress={()=>this.start()} />
            </>
            : <QuizQuestion 
                answers={questions[this.state.currentQuestion].possibleAnswers} 
                question={questions[this.state.currentQuestion].question} 
                nextQuestion={(correct) => this.nextQuestion(correct)} />)}
          <Text style={styles.Score}>Score: {this.state.score}</Text>
        </>)
    }
    }

    
    class App extends React.Component {
      render() {
      return (
        <View style={styles.container}>
          <Text style={styles.Text}>Alyssa's Personality Quiz</Text>
          <TitlePage></TitlePage>
        </View>
      );
    }
  }

    export default App;
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  Text: {
    color:"df3ffb",
    backgroundColor:"red",
  },
  Score: {
    color: "red",
    backgroundColor:"yellow",
  }
});
