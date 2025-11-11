// Propriedade Intelectual de Antonio Batista (linkedin.com/in/antonio-batista1)

import React from 'react';

/**
 * @component Logo
 * @description Renderiza o logo da empresa como um componente SVG.
 * O uso de SVG garante que o logo seja nítido e escalável em qualquer resolução.
 */
const Logo: React.FC = () => (
  <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Define o gradiente de cores a ser usado no círculo externo */}
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    {/* Círculo externo do logo com o gradiente aplicado */}
    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="url(#logoGradient)"/>
    
    {/* Grupo de texto centralizado */}
    <text 
      x="24" 
      y="19"
      textAnchor="middle" 
      dominantBaseline="central" 
      fontSize="14" 
      fill="#1F2937" 
      fontFamily="Inter, sans-serif" 
      fontWeight="800"
    >
      My
    </text>
    
    <text 
      x="24" 
      y="28.5"
      textAnchor="middle" 
      dominantBaseline="central" 
      fontSize="6" 
      fill="#1F2937" 
      fontFamily="Inter, sans-serif" 
      fontWeight="500" 
      letterSpacing="0.1em" 
      style={{textTransform: 'uppercase'}}
    >
      Open
    </text>
    
    <text 
      x="24" 
      y="34"
      textAnchor="middle" 
      dominantBaseline="central" 
      fontSize="5" 
      fill="#1F2937" 
      fontFamily="Inter, sans-serif" 
      fontWeight="600" 
      letterSpacing="0.1em" 
      style={{textTransform: 'uppercase'}}
    >
      Company
    </text>
  </svg>
);

export default Logo;
