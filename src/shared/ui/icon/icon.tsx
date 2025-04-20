import clsx from 'clsx';
import React from 'react';

const icons = {
  profile: <i className="las la-user la-lg" />,
  email: <i className="las la-envelope la-lg" />,
  lock: <i className="las la-lock la-lg" />,
  eye: <i className="las la-eye la-lg" />,
  eyeSlash: <i className="las la-eye-slash la-lg" />,
  pen: <i className="las la-pen la-lg" />,
  signOut: <i className="las la-sign-out-alt la-lg" />,
  close: <i className="las la-times la-lg" />,
  spinner: <i className="las la-circle-notch la-spin la-lg" />,
};

export interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  const originalElement = icons[name];
  const originalClassName = originalElement.props.className;

  return React.cloneElement(originalElement, {
    className: clsx(originalClassName, className),
  });
};
