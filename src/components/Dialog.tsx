import { useState } from 'react';
import {
  Dialog as HeadlessUIDialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Dialog({ isOpen, onClose }: DialogProps) {
  const [shouldShowLoginForm, setShouldShowLoginForm] = useState(true);
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
            <div className='text-[#6B6C70] text-sm'>
              {shouldShowLoginForm ? 'WELCOME BACK' : 'SIGN UP'}
            </div>
            <div className='text-white text-lg font-semibold'>
              {shouldShowLoginForm
                ? 'Log into your account'
                : 'Create an account to continue'}
            </div>
          </DialogTitle>
          {shouldShowLoginForm ? (
            <LoginForm
              onLogin={onClose}
              onShowRegistrationForm={() => setShouldShowLoginForm(false)}
            />
          ) : (
            <RegistrationForm
              onContinue={onClose}
              onShowLoginForm={() => setShouldShowLoginForm(true)}
            />
          )}
        </DialogPanel>
      </div>
    </HeadlessUIDialog>
  );
}

export default Dialog;
