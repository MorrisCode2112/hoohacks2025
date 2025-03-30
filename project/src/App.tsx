import React, { useState } from 'react';
import { Bot as Lotus, MessageCircle, Apple, Mail, Moon, Sun, Heart, ArrowLeft, Play, Pause, Timer } from 'lucide-react';

type Page = 'login' | 'dashboard' | 'meditation' | 'chat';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [meditationTime, setMeditationTime] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setCurrentPage('dashboard');
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert('Account created successfully! You can now log in.');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I'm here to help you on your mindfulness journey. How are you feeling today?", 
          isUser: false 
        }]);
      }, 1000);
      setNewMessage('');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'meditation':
        return (
          <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000')] bg-cover bg-center">
            <div className="min-h-screen bg-black/40 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-8">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex items-center text-white mb-8 hover:text-purple-300 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 mr-2" />
                  Back to Dashboard
                </button>
                
                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Meditation Timer</h2>
                  
                  <div className="flex flex-col items-center space-y-8">
                    <div className="text-8xl font-bold text-white">
                      {meditationTime}:00
                    </div>
                    
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={meditationTime}
                      onChange={(e) => setMeditationTime(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000')] bg-cover bg-center">
            <div className="min-h-screen bg-black/40 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-8">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex items-center text-white mb-8 hover:text-purple-300 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 mr-2" />
                  Back to Dashboard
                </button>
                
                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 flex flex-col h-[80vh]">
                  <div className="p-6 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white">Chat with Zenny</h2>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            message.isUser
                              ? 'bg-purple-600 text-white'
                              : 'bg-white/10 backdrop-blur-md text-white'
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSendMessage} className="p-6 border-t border-white/20">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        type="submit"
                        className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2000')] bg-cover bg-center">
            <div className="min-h-screen bg-black/40 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                  <Lotus className="w-20 h-20 text-white mx-auto mb-6 animate-pulse" />
                  <h1 className="text-5xl font-bold text-white mb-4">Welcome to Zenny</h1>
                  <p className="text-xl text-white/80">Your journey to inner peace begins here</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <button 
                    className="group p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                    onClick={() => setCurrentPage('chat')}
                  >
                    <div className="relative">
                      <MessageCircle className="w-16 h-16 text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Chat with Zenny</h2>
                    <p className="text-white/80 text-lg">Get personalized guidance and support from your mindfulness companion</p>
                  </button>

                  <button 
                    className="group p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                    onClick={() => setCurrentPage('meditation')}
                  >
                    <div className="relative">
                      <Moon className="w-16 h-16 text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Begin Meditation</h2>
                    <p className="text-white/80 text-lg">Start your mindfulness journey with guided meditation sessions</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2000')] bg-cover bg-center">
            <div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
              <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
                <div className="text-center">
                  <Lotus className="w-16 h-16 text-white mx-auto animate-pulse" />
                  <h2 className="mt-6 text-4xl font-bold text-white">Welcome to Zenny</h2>
                  <p className="mt-2 text-lg text-white/80">Your mindfulness journey begins here</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
                  <div className="rounded-md space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-xl relative block w-full px-4 py-3 bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-md"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-xl relative block w-full px-4 py-3 bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-md"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                    >
                      <Mail className="w-6 h-6 mr-2" />
                      Sign in with Email
                    </button>

                    <button
                      type="button"
                      onClick={handleSignUp}
                      className="group relative w-full flex justify-center py-3 px-4 border border-white/20 text-lg font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 backdrop-blur-md transition-colors duration-200"
                    >
                      Create Account
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-transparent text-white/60">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => alert('Google login coming soon!')}
                        className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl text-lg font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors duration-200"
                      >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6 mr-2" />
                        Google
                      </button>

                      <button
                        type="button"
                        onClick={() => alert('Apple login coming soon!')}
                        className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl text-lg font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors duration-200"
                      >
                        <Apple className="w-6 h-6 mr-2" />
                        Apple
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderPage();
}

export default App;