import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertTriangle, HelpCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';

// Define the decision tree for appliance diagnostics
type DiagnosticStep = {
  id: string;
  question: string;
  options: {
    text: string;
    nextStep?: string;
    solution?: string;
    severity?: 'low' | 'medium' | 'high';
  }[];
};

type DiagnosticTree = {
  [key: string]: DiagnosticStep;
};

// TV diagnostic decision tree
const tvDiagnostics: DiagnosticTree = {
  start: {
    id: 'start',
    question: 'What issue are you experiencing with your TV?',
    options: [
      { text: 'TV won\'t turn on', nextStep: 'tv-no-power' },
      { text: 'No picture but has sound', nextStep: 'tv-no-picture' },
      { text: 'No sound but has picture', nextStep: 'tv-no-sound' },
      { text: 'Picture quality issues', nextStep: 'tv-picture-quality' },
      { text: 'Smart TV features not working', nextStep: 'tv-smart-features' }
    ]
  },
  'tv-no-power': {
    id: 'tv-no-power',
    question: 'When you try to turn on your TV, do you see any lights on the front panel?',
    options: [
      { 
        text: 'No lights at all', 
        solution: 'This could indicate a power supply issue. Try a different power outlet or check if the power cord is damaged. If problem persists, the power board likely needs replacement.', 
        severity: 'high' 
      },
      { 
        text: 'Standby light blinks but TV won\'t turn on', 
        solution: 'The TV is receiving power but can\'t fully start. This usually indicates a mainboard problem or software issue. Try unplugging your TV for 2 minutes then plugging back in. If problem persists, professional repair is needed.',
        severity: 'high'
      },
      { 
        text: 'Lights turn on but screen remains black', 
        nextStep: 'tv-no-picture' 
      }
    ]
  },
  'tv-no-picture': {
    id: 'tv-no-picture',
    question: 'Can you hear sound from the TV?',
    options: [
      { 
        text: 'Yes, sound works normally', 
        nextStep: 'tv-backlight'
      },
      { 
        text: 'No sound either', 
        solution: 'The TV might be stuck in a different input mode. Check your input source selection. If that doesn\'t work, try a factory reset. If problem persists, this could indicate a mainboard failure requiring professional repair.',
        severity: 'high'
      }
    ]
  },
  'tv-backlight': {
    id: 'tv-backlight',
    question: 'When you shine a flashlight very close to the screen in a dark room, can you faintly see an image?',
    options: [
      { 
        text: 'Yes, I can see a faint image', 
        solution: 'This confirms a backlight failure. The LCD panel works but the backlight system is faulty. This usually requires replacement of LED strips or the backlight inverter board.',
        severity: 'medium'
      },
      { 
        text: 'No, screen is completely black', 
        solution: 'This likely indicates a T-Con board failure or connection issue between the main board and display panel. Professional repair is recommended.',
        severity: 'high'
      }
    ]
  },
  'tv-no-sound': {
    id: 'tv-no-sound',
    question: 'Have you checked the volume settings and mute button?',
    options: [
      { 
        text: 'Yes, volume is up and not muted', 
        nextStep: 'tv-audio-output'
      },
      { 
        text: 'No, let me check that', 
        solution: 'Please check if the volume is turned up using the TV controls (not just the remote) and that mute is not activated. If this fixes the issue, your remote might need new batteries.',
        severity: 'low'
      }
    ]
  },
  'tv-audio-output': {
    id: 'tv-audio-output',
    question: 'Are you using external speakers or the TV\'s built-in speakers?',
    options: [
      { 
        text: 'TV built-in speakers', 
        solution: 'The TV\'s audio board or speakers might be faulty. Try performing a factory reset. If the problem persists, the audio board likely needs replacement.',
        severity: 'medium'
      },
      { 
        text: 'External audio system/soundbar', 
        solution: 'Check all cable connections between your TV and external audio system. Ensure the correct audio output is selected in your TV settings. Try different cables if available.',
        severity: 'low'
      }
    ]
  },
  'tv-picture-quality': {
    id: 'tv-picture-quality',
    question: 'What type of picture quality issue are you experiencing?',
    options: [
      { 
        text: 'Vertical or horizontal lines on screen', 
        solution: 'This usually indicates a failure in the T-Con board or ribbon cable connections to the panel. Professional repair is recommended.',
        severity: 'medium'
      },
      { 
        text: 'Colors look wrong or distorted', 
        solution: 'First try adjusting picture settings in your TV menu. If problems persist, this could indicate an issue with the main board or panel.',
        severity: 'medium'
      },
      { 
        text: 'Screen is too dark/bright/blurry', 
        solution: 'Try adjusting brightness, contrast, and sharpness settings. If the picture quality doesn\'t improve, there might be an issue with the backlight system or video processing.',
        severity: 'low'
      }
    ]
  },
  'tv-smart-features': {
    id: 'tv-smart-features',
    question: 'What smart features are not working correctly?',
    options: [
      { 
        text: 'Cannot connect to WiFi', 
        solution: 'Try forgetting your WiFi network on the TV and reconnecting. Ensure your router is working properly. If problems persist, the TV\'s WiFi module might need replacement.',
        severity: 'medium'
      },
      { 
        text: 'Apps crash or won\'t open', 
        solution: 'Try clearing the cache of problematic apps or reinstalling them. If that doesn\'t work, perform a software update or factory reset.',
        severity: 'low'
      },
      { 
        text: 'Smart hub/interface is sluggish', 
        solution: 'Your TV might need more available memory. Close unused apps running in the background. If problems persist, a factory reset might help improve performance.',
        severity: 'low'
      }
    ]
  }
};

// AC diagnostic decision tree
const acDiagnostics: DiagnosticTree = {
  start: {
    id: 'start',
    question: 'What issue are you experiencing with your Air Conditioner?',
    options: [
      { text: 'AC won\'t turn on', nextStep: 'ac-no-power' },
      { text: 'Not cooling properly', nextStep: 'ac-not-cooling' },
      { text: 'Making unusual noises', nextStep: 'ac-noisy' },
      { text: 'Water leakage', nextStep: 'ac-leaking' },
      { text: 'Remote control not working', nextStep: 'ac-remote' }
    ]
  },
  'ac-no-power': {
    id: 'ac-no-power',
    question: 'Have you checked that the unit is properly plugged in and the circuit breaker hasn\'t tripped?',
    options: [
      { 
        text: 'Yes, power supply is fine', 
        solution: 'This could indicate an issue with the control board or internal wiring. Professional service is recommended.',
        severity: 'high' 
      },
      { 
        text: 'No, let me check that', 
        solution: 'Please check the power cable connection and circuit breaker. If the breaker has tripped, reset it. If it trips again immediately, there might be an electrical short in your AC unit requiring professional repair.',
        severity: 'medium'
      }
    ]
  },
  'ac-not-cooling': {
    id: 'ac-not-cooling',
    question: 'Is the AC blowing air but it\'s not cool enough?',
    options: [
      { 
        text: 'Yes, air is flowing but not cold', 
        nextStep: 'ac-refrigerant'
      },
      { 
        text: 'Little or no airflow', 
        solution: 'Check if the filter is dirty and clean or replace it. If airflow is still weak, the evaporator coil might be frozen or the blower motor could be failing.',
        severity: 'medium'
      }
    ]
  },
  'ac-refrigerant': {
    id: 'ac-refrigerant',
    question: 'Have you noticed the cooling performance gradually declining over time?',
    options: [
      { 
        text: 'Yes, it\'s been getting worse gradually', 
        solution: 'Your AC likely has a refrigerant leak or is low on refrigerant. This requires professional service to locate and repair the leak, then recharge the system.',
        severity: 'high'
      },
      { 
        text: 'No, it stopped cooling suddenly', 
        solution: 'This could indicate a compressor failure or a blocked refrigerant line. Professional diagnosis and repair is required.',
        severity: 'high'
      }
    ]
  },
  'ac-noisy': {
    id: 'ac-noisy',
    question: 'What type of noise are you hearing?',
    options: [
      { 
        text: 'Grinding or scraping noise', 
        solution: 'This indicates a serious problem with the fan motor bearings or a loose part. Turn off the AC immediately to prevent further damage and call for professional service.',
        severity: 'high'
      },
      { 
        text: 'Rattling or vibrating', 
        solution: 'Check for loose panels on the indoor or outdoor unit and tighten any visible screws. If the noise persists, there may be debris in the fan or a mounting issue.',
        severity: 'medium'
      },
      { 
        text: 'Clicking or buzzing', 
        solution: 'Occasional clicking is normal during startup/shutdown. Constant buzzing or clicking could indicate an electrical issue or a failing component like the compressor or relay.',
        severity: 'medium'
      }
    ]
  },
  'ac-leaking': {
    id: 'ac-leaking',
    question: 'Where is the water leaking from?',
    options: [
      { 
        text: 'Indoor unit (inside the house)', 
        solution: 'The drain line is likely clogged. Try cleaning the condensate drain line with a wet/dry vacuum or by flushing with vinegar. Also check that the unit is properly leveled.',
        severity: 'medium'
      },
      { 
        text: 'Outdoor unit', 
        solution: 'Some water dripping from the outdoor unit is normal during very humid conditions. However, excessive water or refrigerant leakage (which looks oily) requires professional service.',
        severity: 'low'
      }
    ]
  },
  'ac-remote': {
    id: 'ac-remote',
    question: 'Have you tried replacing the batteries in the remote?',
    options: [
      { 
        text: 'Yes, batteries are new', 
        solution: 'The remote control might be damaged or the receiver on the AC unit could be faulty. Try operating the AC using the manual controls on the unit. If that works, the remote needs replacement.',
        severity: 'low'
      },
      { 
        text: 'No, let me try new batteries', 
        solution: 'Replace the batteries and make sure they are inserted correctly. Clean the remote sensor area if it appears dirty.',
        severity: 'low'
      }
    ]
  }
};

// Refrigerator diagnostic decision tree
const refrigeratorDiagnostics: DiagnosticTree = {
  start: {
    id: 'start',
    question: 'What issue are you experiencing with your refrigerator?',
    options: [
      { text: 'Not cooling properly', nextStep: 'fridge-not-cooling' },
      { text: 'Making unusual noises', nextStep: 'fridge-noisy' },
      { text: 'Water/ice dispenser problems', nextStep: 'fridge-dispenser' },
      { text: 'Excessive frost buildup', nextStep: 'fridge-frost' },
      { text: 'Not turning on/no power', nextStep: 'fridge-no-power' }
    ]
  },
  // Additional steps for refrigerator diagnostics would be defined here
};

// Washing machine diagnostic decision tree
const washingMachineDiagnostics: DiagnosticTree = {
  start: {
    id: 'start',
    question: 'What issue are you experiencing with your washing machine?',
    options: [
      { text: 'Won\'t turn on', nextStep: 'washer-no-power' },
      { text: 'Won\'t drain water', nextStep: 'washer-not-draining' },
      { text: 'Excessive vibration or noise', nextStep: 'washer-vibration' },
      { text: 'Leaking water', nextStep: 'washer-leaking' },
      { text: 'Clothes not clean', nextStep: 'washer-not-cleaning' }
    ]
  },
  // Additional steps for washing machine diagnostics would be defined here
};

const diagnosticsMap = {
  'tv': tvDiagnostics,
  'ac': acDiagnostics,
  'refrigerator': refrigeratorDiagnostics,
  'washingmachine': washingMachineDiagnostics
};

export default function DiagnosticTool() {
  const [selectedAppliance, setSelectedAppliance] = useState<string | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);
  const [solution, setSolution] = useState<{text: string, severity: 'low' | 'medium' | 'high'} | null>(null);
  
  const handleApplianceSelect = (appliance: string) => {
    setSelectedAppliance(appliance);
    setCurrentStepId('start');
    setHistory([]);
    setSolution(null);
  };
  
  const handleOptionSelect = (option: {text: string, nextStep?: string, solution?: string, severity?: 'low' | 'medium' | 'high'}) => {
    if (option.solution) {
      setSolution({
        text: option.solution,
        severity: option.severity || 'medium'
      });
    } else if (option.nextStep && selectedAppliance) {
      setHistory(prev => [...prev, currentStepId]);
      setCurrentStepId(option.nextStep);
    }
  };
  
  const handleBack = () => {
    if (solution) {
      setSolution(null);
    } else if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setCurrentStepId(prevStep);
      setHistory(prev => prev.slice(0, -1));
    } else if (selectedAppliance) {
      setSelectedAppliance(null);
    }
  };
  
  const renderCurrentStep = () => {
    if (!selectedAppliance) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Select Your Appliance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => handleApplianceSelect('tv')}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">Television</span>
            </button>
            
            <button 
              onClick={() => handleApplianceSelect('ac')}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.25 21V16.75M15 21V16.75M21 12v4.25A2.75 2.75 0 0118.25 19h-12.5A2.75 2.75 0 013 16.25V7.75A2.75 2.75 0 015.75 5h12.5A2.75 2.75 0 0121 7.75V12zm-18 0h18M12 16.75c1.811 0 3.25-1.452 3.25-3.25 0-1.798-1.439-3.25-3.25-3.25S8.75 11.702 8.75 13.5c0 1.798 1.439 3.25 3.25 3.25z" />
                </svg>
              </div>
              <span className="font-medium">Air Conditioner</span>
            </button>
            
            <button 
              onClick={() => handleApplianceSelect('refrigerator')}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18h14V3H5zm0 9h14M9 3v9m0 4v5" />
                </svg>
              </div>
              <span className="font-medium">Refrigerator</span>
            </button>
            
            <button 
              onClick={() => handleApplianceSelect('washingmachine')}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm8 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-medium">Washing Machine</span>
            </button>
          </div>
        </div>
      );
    }
    
    if (solution) {
      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-lg ${
            solution.severity === 'low' ? 'bg-green-50 border border-green-100' : 
            solution.severity === 'medium' ? 'bg-yellow-50 border border-yellow-100' : 
            'bg-red-50 border border-red-100'
          }`}>
            <div className="flex items-start mb-4">
              {solution.severity === 'low' ? (
                <Check className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              ) : solution.severity === 'medium' ? (
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              )}
              <div>
                <h3 className={`font-semibold text-lg ${
                  solution.severity === 'low' ? 'text-green-800' : 
                  solution.severity === 'medium' ? 'text-yellow-800' : 
                  'text-red-800'
                }`}>
                  {solution.severity === 'low' ? 'Simple Fix Available' : 
                   solution.severity === 'medium' ? 'Moderate Issue Detected' : 
                   'Significant Problem Detected'}
                </h3>
                <div className={`mt-2 ${
                  solution.severity === 'low' ? 'text-green-700' : 
                  solution.severity === 'medium' ? 'text-yellow-700' : 
                  'text-red-700'
                }`}>
                  {solution.text}
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
              <p className="font-medium mb-3">What would you like to do next?</p>
              <div className="flex flex-wrap gap-3">
                {solution.severity !== 'low' && (
                  <Link 
                    to="/#contact" 
                    className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
                  >
                    Schedule a repair
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                )}
                
                <button
                  onClick={() => setSelectedAppliance(null)}
                  className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg transition-colors"
                >
                  Diagnose Another Issue
                </button>
                
                <Link
                  to="/"
                  className="inline-flex items-center border border-gray-300 hover:bg-gray-50 px-5 py-2 rounded-lg transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    if (selectedAppliance && diagnosticsMap[selectedAppliance as keyof typeof diagnosticsMap]) {
      const diagnosticTree = diagnosticsMap[selectedAppliance as keyof typeof diagnosticsMap];
      const currentStep = diagnosticTree[currentStepId];
      
      if (!currentStep) {
        return <div>Error: Step not found</div>;
      }
      
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">{currentStep.question}</h2>
          <div className="space-y-3">
            {currentStep.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="w-full text-left p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow transition-all flex items-center justify-between"
              >
                <span>{option.text}</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    return <div>No diagnostic data available for this appliance</div>;
  };

  return (
    <>
      <SEOHead 
        title="Appliance Diagnostic Tool" 
        description="Use our interactive diagnostic tool to identify problems with your TV, AC, refrigerator or washing machine before scheduling a service."
        canonicalUrl="https://aweshelectronics.in/diagnostics"
      />
      
      <Layout hideFooter>
        <main className="pb-20">
          <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4">
              {/* Add this new Home link button */}
              <div className="flex justify-end mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>

              <AnimatedElement animation="up">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Appliance Diagnostic Tool</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Identify common issues with your appliances before scheduling a service call. Our interactive tool will guide you through simple troubleshooting.
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fade" delay={300}>
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
                  {/* Your existing content */}
                  {renderCurrentStep()}
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      <span>This tool provides general guidance only. For complex issues, professional diagnosis is recommended.</span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}