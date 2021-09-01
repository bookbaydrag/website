import { usePollSession } from '../util/api/session';

type BodyWrapperProps = {
  children: React.ReactNode
}

function BodyWrapper({ children }: BodyWrapperProps) {
  usePollSession();
  return (
    <div>
      {children}
    </div>
  );
}

export default BodyWrapper;
