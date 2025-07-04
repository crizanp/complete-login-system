import React from 'react';
import { Check } from 'lucide-react';

const ProgressIndicator = ({ currentStep, steps }) => {
    const defaultSteps = [
        { id: 1, label: 'User Details' },
        { id: 2, label: 'Documents' },
        { id: 3, label: 'Review' },
        { id: 4, label: 'Agreement' }
    ];

    const stepData = steps || defaultSteps;

    return (
        <div className="w-full px-4 mb-8">
            <div className="relative flex justify-between items-center">
                {stepData.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center flex-1 relative">
                        <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300
                            ${currentStep >= step.id ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
                            {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                        </div>

                        <div className={`mt-2 text-xs text-center w-20 sm:w-auto
                            ${currentStep >= step.id ? 'text-blue-900 font-bold' : 'text-gray-500'}`}>
                            {step.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressIndicator;