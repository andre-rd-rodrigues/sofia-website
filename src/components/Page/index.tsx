import clsx from 'clsx';
import Title from './Title';

const Page = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx('min-h-screen', className)}>{children}</div>;
};
Page.Title = Title;
export default Page;
