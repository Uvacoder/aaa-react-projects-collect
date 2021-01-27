import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions] = useState(data);

  return (
    <main className='container'>
      <div>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map(question => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
