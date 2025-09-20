import React from 'react';
import Image from "next/image";
import styles from '@/components/style.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  iconSrc?: string;
  iconAlt?: string;
};

export default function Button({
  variant = 'primary',
  iconSrc,
  iconAlt = "icon",
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: '',
    secondary: 'bg-white/5 border-white/15',
  };

  return (
    <button
      {...props}
      className={`cursor-pointer hover:opacity-80 ${styles.button} ${variantClasses[variant]} ${variant === 'primary' ? styles.primary_button : styles.secondary_button}`}
    >
      {iconSrc && <Image src={iconSrc} alt={iconAlt} width={20} height={20} />}
      {children}
    </button>
  );
}
