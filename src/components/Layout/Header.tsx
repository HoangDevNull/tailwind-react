import { useWallet } from 'hooks/useWallet';
import { FC } from 'react';

const Header: FC = () => {
  const { connect } = useWallet();

  const handleConnect = async () => {
    await connect();
  };
  return (
    <nav className="mx-auto px-5 py-[20px] bg-[#3d5459] flex justify-between align-middle">
      <div className="flex">
        <div className="font-bold text-[30px]">LOGO</div>
        <ul className="h-full grid grid-cols-4 gap-4">
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </div>

      <button type="button" onClick={handleConnect}>
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;
