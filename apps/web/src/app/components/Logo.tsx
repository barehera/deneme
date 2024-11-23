import React from 'react';

import LogoWhite from '@/assets/logo-white.png';
import Image from 'next/image';

const Logo = () => {
  return <Image src={LogoWhite} alt="Logo" width={96} height={96} />;
};

export default Logo;
