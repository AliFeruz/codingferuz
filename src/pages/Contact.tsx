import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';
import { FormEvent, useEffect } from 'react';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({setSelectedPage}: Props) => {
    const { trigger, register, formState: {errors} } = useForm();


    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
          setSelectedPage(SelectedPage.Contact);
        }
      }, [inView, setSelectedPage]);

      const onSubmit = async (e: FormEvent) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
        }



  return (
    <div id='contact' ref={refInView} className='w-full mx-auto p-4 md:px-10 sm:pb-6 lg:min-h-screen mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col items-center justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-greenblue-500'>
        Contact
        </p>
        <h4 className='py-4'>I am available for freelance or full-time positions. Contact
        me and let&apos;s talk.</h4>
        <form 
        className='flex flex-col md:w-4/6 sm:w-full items-center justify-center'
        target='_blank'
        onSubmit={onSubmit}
        method='POST'
        action='https://formsubmit.co/aliferuzcode@gmail.com'>
        <input type="text"
        className='input'
        placeholder='NAME'
        {...register('name', {
        required: true,
        maxLength: 100,
        })}/>
        {errors.name && (
        <p className='mt-1 text-zinc-200'>
        {errors.name.type === 'required' && 'This field is required.'}
        {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
        </p>
        )}
        <input type="text"
        className='input'
        placeholder='EMAIL'
        {...register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}/>
        {errors.email && (
        <p className='mt-1 text-zinc-200'>
        {errors.email.type === 'required' && 'This field is required.'}
        {errors.email.type === 'pattern' && 'Invalid email address.'}
        </p>
        )}
        <textarea
        rows={4}
        cols={50}
        className='input'
        placeholder='MESSAGE'
        {...register('message', {
        required: true,
        maxLength: 2000,
        })}/>
        {errors.message && (
        <p className='mt-1 text-zinc-200'>
        {errors.message.type === 'required' && 'This field is required.'}
        {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
        </p>
        )}
        <button type='submit' className='w-60 h-10 text-xl border-2 border-greenblue-400'>
        SUBMIT
        </button>
        </form>
    </div>
    </div>
  )
}

export default Contact

