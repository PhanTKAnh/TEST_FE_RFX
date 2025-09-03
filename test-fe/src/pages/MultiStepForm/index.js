import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4'; // PDF hoàn tất
import PDFPreview from './components/PdfPreview';
import "./css/style.css";
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from './action/FormAction';

export default function MultiStepForm() {
  const currentStep = useSelector(state => state.form.step);
  const dispatch = useDispatch();

  return (
  <div className="msf-container">
  <div className="msf-wrapper">

    <h2 className="msf-title">Multi-Step Form</h2>

    {/* Stepper */}
    <div className="msf-stepper">
      <div className={`msf-step ${currentStep >= 1 ? 'msf-completed' : ''} ${currentStep === 1 ? 'msf-active' : ''}`}>
        <div className="msf-step-counter">1</div>
        <div className="msf-step-name">Information</div>
      </div>
      <div className={`msf-step ${currentStep >= 2 ? 'msf-completed' : ''} ${currentStep === 2 ? 'msf-active' : ''}`}>
        <div className="msf-step-counter">2</div>
        <div className="msf-step-name">Skill</div>
      </div>
      <div className={`msf-step ${currentStep >= 3 ? 'msf-completed' : ''} ${currentStep === 3 ? 'msf-active' : ''}`}>
        <div className="msf-step-counter">3</div>
        <div className="msf-step-name">Project</div>
      </div>
      <div className={`msf-step ${currentStep >= 4 ? 'msf-completed' : ''} ${currentStep === 4 ? 'msf-active' : ''}`}>
        <div className="msf-step-counter">4</div>
        <div className="msf-step-name">Finish</div>
      </div>
    </div>

    {currentStep !== 4 ? (
      <div className="msf-main">
        <div className="msf-left">
          <div className="msf-form-wrapper">
            <h4 className='msf-form-title'>Fill Form</h4>
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {currentStep === 3 && <Step3 />}
          </div>
        </div>

        <div className="msf-right">
          <div className="msf-preview-wrapper">
            <h4>PDF Preview</h4>
            <PDFPreview />
          </div>
        </div>
      </div>
    ) : (
      <div className="msf-final">
        <Step4 />
      </div>
    )}

  </div>
</div>

  );
}
