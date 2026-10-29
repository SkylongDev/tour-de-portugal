import { questions } from '../data'

export default function Questions() {
  return (
    <section
      className="questions container section-space"
      id="questions"
      aria-labelledby="questions-title"
    >
      <div className="questions-heading reveal">
        <p className="section-label">Before you go</p>
        <h2 id="questions-title">Good to know</h2>
        <p>Answers to a few common questions.</p>
      </div>
      <div className="question-list reveal">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span className="question-icon" aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
