// pages/test.js
import questions from '../data/questions.json';

export default function Test() {
    return (
        <div>
            <h1>Test Page</h1>
            <pre>{JSON.stringify(questions, null, 2)}</pre>
        </div>
    );
}