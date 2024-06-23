import {
  Description,
  Dialog as HeadlessUIDialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Dialog({ isOpen, onClose }: DialogProps) {
  return (
    <HeadlessUIDialog open={isOpen} onClose={onClose} className='relative z-50'>
      <DialogBackdrop className='fixed inset-0 bg-black/80' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='max-w-lg space-y-4 bg-gray-500 p-12 border-2 rounded-lg'>
          <DialogTitle
            as='div'
            className='flex flex-col justify-center items-center'>
            <div className='text-[#6B6C70] text-sm'>SIGN UP</div>
            <div className='text-white text-lg font-semibold'>
              Create an account to continue
            </div>
          </DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>
          <div className='flex gap-4'>
            <button onClick={onClose}>Cancel</button>
            <button onClick={onClose}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </HeadlessUIDialog>
  );
}

export default Dialog;
