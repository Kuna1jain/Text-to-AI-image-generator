import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from "openai";
function App() {
    const [prompt, setPrompt] = useState('');
    const [result,setResult]=useState('');
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const generatetimage = async () => {
        const res = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        setResult(res.data.data[0].url);
    };
    return (
        <div className='app-main'>
            <h3>Generate an image using OpenAI API</h3>
            <input className='app-input'
                placeholder=" What's on your mind ;)"
                onChange={(e) => setPrompt(e.target.value)}

                type="text" name="" id="" />
            <button onClick={generatetimage}>Generate an Image</button>
            {result.length > 0 ? <img src={result} className="result-image" alt="Sorry unable to process your image"/>: <></>}
        </div>
    );

}

export default App;