import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../../../components/ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, User, MapPin, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  address: z.string().min(1, 'Address is required'),
  budget: z.string().optional(),
  message: z.string().optional(),
});

const BUDGETS = [
  { value: 'small', label: '$1,000 - $5,000' },
  { value: 'medium', label: '$5,000 - $10,000' },
  { value: 'large', label: '$10,000+' },
];

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      // Add your form submission logic here
      console.log('Form submitted:', data);
      toast.success('Your message has been sent successfully! 🎉');
      reset();
    } catch (error) {
      console.error('Failed to submit form:', error);
      toast.error('An error occurred while sending your message! 😞');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className='w-full bg-[#111] rounded-3xl p-8 shadow-sm'>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

      <div className='mb-4'>
        <span className='inline-block px-4 py-1 text-xs font-medium text-[#ff3e33] bg-[#222] rounded-full'>
          FEEDBACK FORM
        </span>
      </div>

      <h2 className='text-4xl font-bold mb-8 text-white'>Do you have questions?</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Name */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Name*'
              className={`w-full px-12 py-4 rounded-full bg-[#181818] border ${errors.name ? 'border-red-500' : 'border-[#333]'} text-white focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa]`}
              {...register('name')}
            />
            <User className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
            {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className='relative'>
            <input
              type='email'
              placeholder='Email ID*'
              className={`w-full px-12 py-4 rounded-full bg-[#181818] border ${errors.email ? 'border-red-500' : 'border-[#333]'} text-white focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa]`}
              {...register('email')}
            />
            <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
            {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
          </div>

          {/* Address */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Address*'
              className={`w-full px-12 py-4 rounded-full bg-[#181818] border ${errors.address ? 'border-red-500' : 'border-[#333]'} text-white focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa]`}
              {...register('address')}
            />
            <MapPin className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
            {errors.address && (
              <p className='text-red-500 text-xs mt-1'>{errors.address.message}</p>
            )}
          </div>

          {/* Budget */}
          <div className='relative'>
            <select
              className='w-full px-12 py-4 rounded-full bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] appearance-none'
              defaultValue=''
              {...register('budget')}
              style={{
                backgroundImage:
                  'url(\'data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>\')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
              }}
            >
              <option value='' disabled>
                Select your Budget
              </option>
              {BUDGETS.map((budget) => (
                <option key={budget.value} value={budget.value}>
                  {budget.label}
                </option>
              ))}
            </select>
            <MessageSquare className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
          </div>
        </div>

        {/* Message */}
        <div className='relative'>
          <textarea
            placeholder='Message...'
            rows='5'
            className='w-full px-12 py-4 rounded-3xl bg-[#181818] border border-[#333] text-white focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] resize-none'
            {...register('message')}
          ></textarea>
          <MessageSquare className='absolute left-4 top-6 text-gray-500 w-5 h-5' />
        </div>

        {/* Save Info Checkbox */}
        <div className='flex items-start'>
          <input
            type='checkbox'
            id='saveInfo'
            className='mt-1 h-4 w-4 border-gray-300 rounded text-[#ff3e33] focus:ring-[#ff3e33]'
          />
          <label htmlFor='saveInfo' className='ml-2 text-sm text-gray-400'>
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <Button
            text={isSending ? 'Sending...' : 'Submit Query'}
            variant='primary'
            size='medium'
            type='submit'
            className='mt-2'
            disabled={isSending}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
