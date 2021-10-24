// import React, { Component } from 'react';
// import Statistics from './components/Statistics/Statistics';
// import Section from './components/Section/Section';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleCount = e => {
//     const name = e.currentTarget.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return parseInt((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleCount}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </>
//     );
//   }
// };

// export default App;



import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';



export default function App() {

  const [goodFeedback, setGoodFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);

  const options = ['good', 'bad', 'neutral'];

  // handleCount = e => {
  //   const name = e.currentTarget.name;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };
  const handleCount = ({ target }) => {
    const { feedback } = target.dataset;
  
    switch (feedback) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
  
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
  
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
  
      default:
        return;
    }
    };

  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };
  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   return parseInt((good / this.countTotalFeedback()) * 100);
  // };
const countPositiveFeedbackPercentage = () => {
  const totalFeedback = countTotalFeedback();
  return totalFeedback ? Math.round((goodFeedback / totalFeedback) * 100) : 0;
}

  // render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleCount}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  // }
};

// export default App;