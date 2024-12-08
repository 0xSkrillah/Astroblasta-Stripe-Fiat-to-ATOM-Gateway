import React from 'react';
import { Coins } from 'lucide-react';

interface HeaderProps {
  atomPrice: number;
}

export function Header({ atomPrice }: HeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
          <Coins className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        Astroblasta!
      </h1>
      <h2 className="mt-2 text-xl text-gray-700">
        Buy ATOM with Fiat
      </h2>
      <p className="mt-2 text-gray-600">
        Current ATOM Price: ${atomPrice.toFixed(2)} USD
      </p>
    </div>
  );
}