import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

export default function App() {

  const [goodFeedback, setGoodFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);

  const options = ['good', 'bad', 'neutral'];

  const handleCount = ({ target }) => {

    switch (target.name) {
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

const countPositiveFeedbackPercentage = () => {
  const totalFeedback = countTotalFeedback();
  return totalFeedback ? Math.round((goodFeedback / totalFeedback) * 100) : 0;
}
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
};