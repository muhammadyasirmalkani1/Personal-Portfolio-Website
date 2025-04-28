import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Bell, Lock, Eye, EyeOff, Check } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    marketingEmails: false,
    profileVisibility: 'public',
    language: 'english',
    fontSize: 'medium',
  });
  
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  
  const handleChange = (name: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const saveSettings = () => {
    // Simulate saving to localStorage
    localStorage.setItem('userSettings', JSON.stringify(settings));
    
    // Show saved message
    setShowSavedMessage(true);
    
    // Hide message after delay
    setTimeout(() => {
      setShowSavedMessage(false);
    }, 3000);
  };
  
  useEffect(() => {
    // Load saved settings if available
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Settings" 
          subtitle="Customize your portfolio experience"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {/* Appearance */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 fade-in">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Sun className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
              Appearance
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                    <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${darkMode ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${darkMode ? 'transform translate-x-6 text-purple-600' : 'text-yellow-500'}`}>
                      {darkMode ? <Moon size={14} /> : <Sun size={14} />}
                    </div>
                  </div>
                </label>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Font Size</label>
                <div className="flex gap-3">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleChange('fontSize', size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        settings.fontSize === size
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 fade-in">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Bell className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
              Notifications
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={settings.emailNotifications}
                    onChange={() => handleChange('emailNotifications', !settings.emailNotifications)}
                  />
                  <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${settings.emailNotifications ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${settings.emailNotifications ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
              
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700 dark:text-gray-300">Marketing Emails</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={settings.marketingEmails}
                    onChange={() => handleChange('marketingEmails', !settings.marketingEmails)}
                  />
                  <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${settings.marketingEmails ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                  <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${settings.marketingEmails ? 'transform translate-x-6' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
          
          {/* Privacy */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 fade-in">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Lock className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
              Privacy
            </h3>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Profile Visibility</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    checked={settings.profileVisibility === 'public'}
                    onChange={() => handleChange('profileVisibility', 'public')}
                    className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded-full"
                  />
                  <span className="flex items-center text-gray-700 dark:text-gray-300">
                    <Eye size={18} className="mr-2" />
                    Public - Visible to everyone
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    checked={settings.profileVisibility === 'private'}
                    onChange={() => handleChange('profileVisibility', 'private')}
                    className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded-full"
                  />
                  <span className="flex items-center text-gray-700 dark:text-gray-300">
                    <EyeOff size={18} className="mr-2" />
                    Private - Only visible to you
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    checked={settings.profileVisibility === 'contacts'}
                    onChange={() => handleChange('profileVisibility', 'contacts')}
                    className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded-full"
                  />
                  <span className="flex items-center text-gray-700 dark:text-gray-300">
                    <Lock size={18} className="mr-2" />
                    Contacts Only - Visible to your contacts
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Language */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 fade-in">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Globe className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
              Language
            </h3>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Language</label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="japanese">Japanese</option>
              </select>
            </div>
          </div>
          
          {/* Save Button */}
          <div className="flex justify-end fade-in">
            <button
              onClick={saveSettings}
              className="btn btn-primary"
            >
              Save Settings
            </button>
          </div>
          
          {/* Saved Message */}
          {showSavedMessage && (
            <div className="fixed bottom-6 right-6 bg-green-600 text-white rounded-lg shadow-lg p-4 flex items-center transition-all duration-300 fade-in">
              <Check size={20} className="mr-2" />
              Settings saved successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;