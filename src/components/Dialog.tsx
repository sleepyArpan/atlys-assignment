import {
  Dialog as HeadlessUIDialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import FormField from './FormField';
import Button from './Button';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Dialog({ isOpen, onClose }: DialogProps) {
  return (
    <HeadlessUIDialog
      open={isOpen}
      onClose={onClose}
      transition
      className='relative z-50 transition duration-300 ease-out data-[closed]:opacity-0'>
      <DialogBackdrop className='fixed inset-0 bg-black/80' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='w-1/2 space-y-4 bg-gray-500 p-12 border-2 rounded-lg'>
          <DialogTitle
            as='div'
            className='flex flex-col justify-center items-center mb-11'>
            <div className='text-[#6B6C70] text-sm'>SIGN UP</div>
            <div className='text-white text-lg font-semibold'>
              Create an account to continue
            </div>
          </DialogTitle>
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
          <Button onClick={onClose} className='w-full mb-3'>
            Continue
          </Button>
          <span className='text-[#6B6C70] text-sm mr-1'>
            Already have an account?
          </span>
          <button className='border-none bg-none text-white p-0 text-sm hover:underline'>
            Login →
          </button>
        </DialogPanel>
      </div>
    </HeadlessUIDialog>
  );
}

export default Dialog;
