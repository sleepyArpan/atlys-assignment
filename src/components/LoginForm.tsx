import FormField from './FormField';
import Button from './Button';

type LoginFormProps = {
  onLogin: () => void;
  onShowRegistrationForm: () => void;
};

export default function LoginForm({
  onLogin,
  onShowRegistrationForm,
}: LoginFormProps) {
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
        fieldLabel='Password'
        placeholder='Enter your password'
        fieldName='password'
        inputType='password'
        className='mb-5'
      />
      <Button onClick={onLogin} className='w-full mb-3'>
        Login Now
      </Button>
      <span className='text-[#6B6C70] text-sm mr-1'>Not registered yet?</span>
      <button
        className='border-none bg-none text-white p-0 text-sm hover:underline'
        onClick={onShowRegistrationForm}>
        Register →
      </button>
    </>
  );
}
