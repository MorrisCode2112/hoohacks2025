import pyttsx3

def speak_text(text):
    # Initialize the TTS engine
    engine = pyttsx3.init()
    
    # Adjust properties: slowing down the rate for a calm, meditative tone
    rate = engine.getProperty('rate')
    engine.setProperty('rate', rate - 25)
    
    # Optional: choose a specific voice if you like
    voices = engine.getProperty('voices')
    for voice in voices:
        if 'female' in voice.name.lower():
            engine.setProperty('voice', voice.id)
            break
    
    # Queue the text to be spoken
    engine.say(text)
    engine.runAndWait()

if __name__ == "__main__":
    meditation_text = "Hello everyone"
    speak_text(meditation_text)
