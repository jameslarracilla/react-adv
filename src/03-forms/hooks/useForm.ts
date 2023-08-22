import { useState, ChangeEvent } from 'react';

export function useForm<T>(initState: T) {
  const [formData, setFormData] = useState(initState);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function reset() {
    setFormData({ ...initState });
  }

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    ...formData,
    formData,
    isValidEmail,
    onChange,
    reset,
  };
}
