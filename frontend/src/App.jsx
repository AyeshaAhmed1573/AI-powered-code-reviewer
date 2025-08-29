import { useState, useEffect } from 'react'
import "prism-themes/themes/prism-vsc-dark-plus.css";
import prism from "prismjs";
import "prismjs";
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from 'react-markdown';
import './App.css'

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // start loader
    try {
      const response = await axios.post('http://localhost:3000/ai/get_response/', { code });
      setReview(response.data);
    } catch (error) {
      console.error(error);
      setReview("⚠️ Something went wrong. Please try again.");
    }
    setLoading(false); // stop loader
  }

  return (
    <>
     <main className="bg-black min-h-screen w-full flex gap-2 p-2 items-stretch">
  {/* Left Side - Code Editor */}
  <div className="left flex-1 bg-gray-900 rounded-2xl relative flex flex-col">
    <div className="code text-slate-100 flex-1 overflow-auto">
      <Editor
        className="code-editor"
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          minHeight: "100%",
        }}
      />
    </div>
    <div
      onClick={reviewCode}
      className="review p-3 m-3 rounded-xl cursor-pointer bg-blue-800 text-slate-50 text-center"
    >
      Review
    </div>
  </div>

  {/* Right Side - Review Panel */}
  <div className="right flex-1 bg-gray-800 rounded-2xl text-slate-50 p-3 overflow-auto">
    {loading ? (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-blue-300 text-sm">Reviewing your code...</p>
      </div>
    ) : (
      <Markdown>{review}</Markdown>
    )}
  </div>
</main>

    </>
  )
}

export default App
