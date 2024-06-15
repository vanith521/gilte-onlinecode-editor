import React, { useState } from 'react';
import axios from 'axios';
import './styles/CodeEditor.css';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/execute', { code, language });
            setOutput(response.data.output);
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    return (
        <div className="code-editor">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                {/* Add more languages as needed */}
            </select>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="10"
                cols="50"
            />
            <button onClick={handleSubmit}>Run Code</button>
            <pre>{output}</pre>
        </div>
    );
};

export default CodeEditor;
