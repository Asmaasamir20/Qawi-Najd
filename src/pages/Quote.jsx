import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Building,
  CheckCircle2,
  MapPin,
  Calendar,
} from 'lucide-react';
import logo from '../assets/images/logo/2.svg';
import { MdBusiness, MdHome, MdFactory, MdLocationCity } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SERVICE_TYPES = [
  { key: 'commercial', label: 'Commercial', icon: <MdLocationCity size={40} /> },
  { key: 'industrial', label: 'Industrial', icon: <MdFactory size={40} /> },
  { key: 'residential', label: 'Residential', icon: <MdHome size={40} /> },
  { key: 'corporate', label: 'Corporate', icon: <MdBusiness size={40} /> },
];

const SERVICES = ['service1', 'service2', 'service3', 'service4', 'service5'];

// Zod schema for the quote form
const quoteSchema = z.object({
  name: z.string().min(1, 'name_required'),
  email: z.string().min(1, 'email_required').email('email_invalid'),
  location: z.string().min(1, 'location_required'),
  workType: z.string().min(1, 'work_type_required'),
  service: z.string().min(1, 'select_service_required'),
  date: z.string().min(1, 'date_required'),
});

const Quote = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = React.useState('industrial');
  const [isSending, setIsSending] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting: formIsSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(quoteSchema),
  });

  const handleTypeSelect = (key) => setSelectedType(key);

  const onSubmit = async (data) => {
    setIsSending(true);
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      console.log('Form data:', data);
      toast.success('تم إرسال الطلب بنجاح! 🎉');
      reset();
    } catch (error) {
      console.error('Failed to submit form:', error);
      toast.error('حدث خطأ أثناء إرسال الطلب! 😞');
    } finally {
      setIsSending(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#111] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 md:py-10 m-6 rounded-3xl'>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-6xl'>
        {/* Logo & Title */}
        <div className='flex-1 flex flex-col items-center md:items-start gap-4 text-center md:text-left'>
          <img src={logo} alt='logo' className='w-20 h-20 md:w-24 md:h-24 mb-2' />
          <span className='bg-[#222] text-[#ff3e33] px-4 py-1 rounded-full text-sm font-semibold mb-2'>
            FREE ESTIMATE
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            {t('request_quote')}
          </h1>
        </div>
        {/* Service Types */}
        <div className='flex flex-wrap sm:flex-row gap-3 sm:gap-4 flex-1 justify-center'>
          {SERVICE_TYPES.map((type) => (
            <button
              key={type.key}
              onClick={() => handleTypeSelect(type.key)}
              className={`flex flex-col items-center justify-center w-28 sm:w-32 h-28 sm:h-32 rounded-2xl border transition-all duration-200 text-white text-base sm:text-lg font-medium gap-2
                ${selectedType === type.key ? 'bg-[#ff3e33] border-[#ff3e33] shadow-lg' : 'bg-[#181818] border-[#333] hover:border-[#ff3e33]'}`}
            >
              <span className='text-3xl sm:text-4xl'>{type.icon}</span>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>
      <hr className='border-[#222] w-full max-w-6xl my-6 md:my-8' />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'
      >
        {/* Name */}
        <div className='col-span-1 relative'>
          <Input
            type='text'
            placeholder={t('name')}
            className='w-full rounded-full bg-[#181818] border-[#333] text-white px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base'
            {...register('name')}
          />
          <User className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6' />
          {errors.name && (
            <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className='col-span-1 relative'>
          <Input
            type='email'
            placeholder={t('email')}
            className='w-full rounded-full bg-[#181818] border-[#333] text-white px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base'
            {...register('email')}
          />
          <Mail className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6' />
          {errors.email && (
            <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div className='col-span-1 sm:col-span-2 md:col-span-1 relative'>
          <Input
            type='text'
            placeholder={t('location')}
            className='w-full rounded-full bg-[#181818] border-[#333] text-white px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base'
            {...register('location')}
          />
          <MapPin className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6' />
        </div>
        {errors.location && (
          <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.location.message}</p>
        )}
        {/* Work Type */}
        <div className='col-span-1 relative'>
          <Select onValueChange={(value) => register('workType').onChange({ target: { value } })}>
            <SelectTrigger className='w-full rounded-full bg-[#181818] border-[#333] text-white pl-4 sm:pl-6 pr-8 sm:pr-10 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base h-[52px] sm:h-[60px] flex items-center gap-2'>
              <span className='text-gray-500 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center'>
                <Building />
              </span>
              <SelectValue placeholder={t('work_type')} />
            </SelectTrigger>
            <SelectContent className='bg-[#181818] text-white border-[#333] rounded-xl'>
              <SelectItem
                value='construction'
                className='text-sm sm:text-base py-3 hover:bg-[#222] focus:bg-[#222] cursor-pointer'
              >
                {t('construction')}
              </SelectItem>
              <SelectItem
                value='maintenance'
                className='text-sm sm:text-base py-3 hover:bg-[#222] focus:bg-[#222] cursor-pointer'
              >
                {t('maintenance')}
              </SelectItem>
              <SelectItem
                value='renovation'
                className='text-sm sm:text-base py-3 hover:bg-[#222] focus:bg-[#222] cursor-pointer'
              >
                {t('renovation')}
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.workType && (
            <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.workType.message}</p>
          )}
        </div>

        {/* Service Selection */}
        <div className='col-span-1 relative'>
          <Select onValueChange={(value) => register('service').onChange({ target: { value } })}>
            <SelectTrigger className='w-full rounded-full bg-[#181818] border-[#333] text-white pl-4 sm:pl-6 pr-8 sm:pr-10 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base h-[52px] sm:h-[60px] flex items-center gap-2'>
              <span className='text-gray-500 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center'>
                <MessageSquare />
              </span>
              <SelectValue placeholder={t('select_service')} />
            </SelectTrigger>
            <SelectContent className='bg-[#181818] text-white border-[#333] rounded-xl'>
              {SERVICES.map((service) => (
                <SelectItem
                  key={service}
                  value={service}
                  className='text-sm sm:text-base py-3 hover:bg-[#222] focus:bg-[#222] cursor-pointer'
                >
                  {t(service)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.service.message}</p>
          )}
        </div>

        {/* Date */}
        <div className='col-span-1 relative'>
          <Input
            type='date'
            placeholder={t('preferred_date')}
            className='w-full rounded-full bg-[#181818] border-[#333] text-white px-10 sm:px-12 py-3 sm:py-4 focus:outline-none focus:border-[#ff3e33] placeholder:text-[#aaa] text-sm sm:text-base'
            {...register('date')}
          />
          <Calendar className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 sm:w-6 sm:h-6' />
          {errors.date && (
            <p className='text-red-500 text-xs sm:text-sm mt-1'>{errors.date.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className='col-span-1 sm:col-span-2 md:col-span-1 flex items-center justify-center md:justify-end'>
          <Button
            type='submit'
            disabled={formIsSubmitting || isSending}
            className='w-full md:w-auto bg-[#ff3e33] text-white rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:bg-[#e63a2e] flex items-center justify-center gap-2'
          >
            {isSending ? (
              <>
                <span className='animate-spin'>⚡</span>
                {t('sending')}
              </>
            ) : (
              <>
                <CheckCircle2 size={18} className='sm:w-5 sm:h-5' />
                {t('submit')}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Quote;
