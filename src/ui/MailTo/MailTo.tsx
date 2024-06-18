import { FC, ReactNode } from 'react';

type MailToProps = {
  className?: string;
  email: string;
  subject?: string;
  body?: string;
  children: ReactNode;
};

const MailTo: FC<MailToProps> = ({ className, email, subject = '', body = '', children }) => {
  return (
    <a
      className={className}
      href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
      {children}
    </a>
  );
};

export default MailTo;
