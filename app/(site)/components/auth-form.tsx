'use client';
import { Button } from '@/app/components/button';
import { Input } from '@/app/components/input';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AuthSocialButton } from './auth-social-button';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
  const session = useSession();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === 'authenticated') {
      console.log('📢 [auth-form.tsx:18]', 'Authenticated');
    }
  }, [session.status]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const { register, handleSubmit, formState: {
    errors
  } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'LOGIN') {

    }

    if (variant === 'REGISTER') {

    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {
            variant === 'REGISTER' && <Input register={register} errors={errors} label='Name' id='name' />
          }
          <Input register={register} errors={errors} label='Email' id='email' type='email' />
          <Input register={register} errors={errors} label='Password' id='password' type='password' />

          <div>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
            <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === 'LOGIN' ? 'New to Messenger' : 'Already have an account?'}
          </div>

          <div onClick={toggleVariant} className='underline cursor-pointer'>
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>

        </div>
      </div>
    </div>
  );
};
