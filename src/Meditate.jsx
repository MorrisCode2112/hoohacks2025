import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API
const ai = new GoogleGenAI({ apiKey: "AIzaSyBMX7EXzIlc3i0KdX8B1z7Jn9x3AllQq_4"});

function Meditate() {
  const [meditationText, setMeditationText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateMeditationScript = async () => {
      try {
        // Get AI response
        const prompt = `Generate a personalized meditation script that is 2-3 minutes long and has a calming tone.`;
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt
        });

        setMeditationText(response.text);
      } catch (error) {
        console.error("Error calling Gemini API:", error);
        setMeditationText('Error generating meditation script');
      } finally {
        setLoading(false);
      }
    };

    generateMeditationScript();
  }, []);

  if (loading) {
    return (
      <div className="container">
        {/* Pulsating Background */}
        <div className="pulsating-sphere-green"></div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Pulsating Background */}
      <div className="pulsating-sphere-green"></div>
      <h1>{meditationText}</h1>
    </div>
  );
}

export default Meditate;
