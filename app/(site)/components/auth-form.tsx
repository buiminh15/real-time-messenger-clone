'use client';
import { Button } from '@/app/components/button';
import { Input } from '@/app/components/input';
import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER'

export const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

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
            <Button>Test</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
