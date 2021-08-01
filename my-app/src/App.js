import { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const addFeedback = feedback => {
    switch (feedback) {
      case 'good': return setGood(good + 1);

      case 'neutral': return setNeutral(neutral + 1);

      case 'bad': return setBad(bad + 1);

      default: return
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback())
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback} />
      </Section>

      <Section title={'Statistics'}>

        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good = {good}
            neutral = {neutral}
            bad = {bad}
            total = {countTotalFeedback()}
            positivePercentage = {countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}