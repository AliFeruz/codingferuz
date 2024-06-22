import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';
import { FormEvent, useEffect } from 'react';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
    const { trigger, register, formState: { errors } } = useForm();
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setSelectedPage(SelectedPage.Contact);
        }
    }, [inView, setSelectedPage]);

    const onSubmit = async (e: FormEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <div id='contact' ref={refInView} className='w-full min-h-screen flex items-center justify-center contrast-200
            bg-gradient-to-tl from-lime-950 from-20% via-lime-900 via-50% to-lime-950 to-80%'>
            <div className='absolute h-full w-5/6 flex items-center justify-center 
                border-r-2 border-l-2 border-gray-600' />
            <div className='absolute h-5/6 w-full flex items-center justify-center 
                border-t-2 border-b-2 border-gray-600' />
            <div className='relative flex flex-col items-start justify-start w-5/6 px-10'>
                <div className='w-full'>
                    <p className='uppercase text-xl px-4 tracking-widest text-lime-500'>
                    Contact
                    </p>
                    <h3 className='py-6 px-4'>I am available for freelance or full-time positions. Contact
                     me and let&apos;s talk.</h3>
                </div>
                <form
                    className='flex flex-col items-start px-4 justify-start w-full'
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
                        })} />
                    {errors.name && (
                        <p className='mt-1 text-lime-300'>
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
                        })} />
                    {errors.email && (
                        <p className='mt-1 text-lime-300'>
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
                        })} />
                    {errors.message && (
                        <p className='mt-1 text-lime-300'>
                            {errors.message.type === 'required' && 'This field is required.'}
                            {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                        </p>
                    )}
                    <button type='submit' className='w-60 h-10 btn text-xl border-2 border-gray-400'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
