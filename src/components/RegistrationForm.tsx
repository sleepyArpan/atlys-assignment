import FormField from './FormField';
import Button from './Button';

type RegistrationFormProps = {
  onContinue: () => void;
  onShowLoginForm: () => void;
};

export default function RegistrationForm({
  onContinue,
  onShowLoginForm,
}: RegistrationFormProps) {
  return (
    <>
      <FormField
        fieldLabel='Email'
        placeholder='Enter your email'
        fieldName='email'
        inputType='email'
        className='mb-4'
      />
      <FormField
        fieldLabel='Username'
        placeholder='Enter your username'
        fieldName='username'
        className='mb-4'
      />
      <FormField
        fieldLabel='Password'
        placeholder='Enter your password'
        fieldName='password'
        inputType='password'
        className='mb-5'
      />
      <Button onClick={onContinue} className='w-full mb-3'>
        Continue
      </Button>
      <span className='text-[#6B6C70] text-sm mr-1'>
        Already have an account?
      </span>
      <button
        className='border-none bg-none text-white p-0 text-sm hover:underline'
        onClick={onShowLoginForm}>
        Login →
      </button>
    </>
  );
}
