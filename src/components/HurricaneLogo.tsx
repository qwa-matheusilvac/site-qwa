"use client"; 
  
 import React, { useEffect, useState } from 'react'; 
  
 const HurricaneLogo = () => { 
   const [showCheck, setShowCheck] = useState(false); 
  
   useEffect(() => { 
     // Timer to show checkmark after rings animation completes (approx. 3s) 
     const timer = setTimeout(() => { 
       setShowCheck(true); 
     }, 3000); 
     return () => clearTimeout(timer); 
   }, []); 
  
   // Configuração para criar um visual orgânico e caótico 
   const swirls = Array.from({ length: 35 }).map((_, i) => { 
     const progress = i / 34; 
     const yBase = i * 8; 
     const widthBase = 260 - (progress * 200); 
     const heightBase = 70 - (progress * 50); 
      
     const offsetX = (Math.random() - 0.5) * 40; 
     const rotation = (Math.random() - 0.5) * 20 - (progress * 10); 
      
     const startAngle = Math.random() * 360; 
     const sweepAngle = 180 + Math.random() * 180;  
      
     const delay = progress * 1.5 + Math.random() * 0.5; 
     const duration = 1 + Math.random() * 1.5; 
     const strokeWidth = 1.2 + Math.random() * 1.5; 
     const opacity = 0.4 + Math.random() * 0.5; 
  
     return {  
       yBase, widthBase, heightBase, offsetX, rotation,  
       startAngle, sweepAngle, delay, duration, strokeWidth, opacity, 
       id: i  
     }; 
   }); 
  
   return ( 
     <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"> 
       <svg 
         viewBox="0 0 600 600" 
         className="w-full h-full overflow-visible" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg" 
       > 
         <defs> 
           <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"> 
             <feGaussianBlur stdDeviation="2.5" result="blur" /> 
             <feComposite in="SourceGraphic" in2="blur" operator="over" /> 
           </filter> 
           <filter id="checkGlow" x="-50%" y="-50%" width="200%" height="200%"> 
             <feGaussianBlur stdDeviation="5" result="blur" /> 
             <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" /> 
             <feMerge> 
               <feMergeNode in="blur" /> 
               <feMergeNode in="SourceGraphic" /> 
             </feMerge> 
           </filter> 
         </defs> 
  
         {/* Hurricane Funnel */} 
         <g transform="translate(300, 80)"> 
           {swirls.map((swirl) => { 
             const rx = swirl.widthBase; 
             const ry = swirl.heightBase; 
             const startRad = (swirl.startAngle * Math.PI) / 180; 
             const endRad = ((swirl.startAngle + swirl.sweepAngle) * Math.PI) / 180; 
              
             const x1 = rx * Math.cos(startRad); 
             const y1 = ry * Math.sin(startRad); 
             const x2 = rx * Math.cos(endRad); 
             const y2 = ry * Math.sin(endRad); 
              
             const largeArc = swirl.sweepAngle > 180 ? 1 : 0; 
             const pathData = `M ${x1} ${y1} A ${rx} ${ry} 0 ${largeArc} 1 ${x2} ${y2}`; 
  
             return ( 
               <g  
                 key={swirl.id}  
                 transform={`translate(${swirl.offsetX}, ${swirl.yBase}) rotate(${swirl.rotation})`} 
               > 
                 <path 
                   d={pathData} 
                   stroke="white" 
                   strokeWidth={swirl.strokeWidth} 
                   strokeLinecap="round" 
                   style={{ 
                     opacity: 0, 
                     animation: `drawPath ${swirl.duration}s ease-in-out ${swirl.delay}s forwards`, 
                     strokeDasharray: 2000, 
                     strokeDashoffset: 2000 
                   }} 
                 /> 
                  
                 <circle 
                   cx={x1} 
                   cy={y1} 
                   r={swirl.strokeWidth * 1.5} 
                   fill="white" 
                   style={{ 
                     opacity: 0, 
                     animation: `fadeIn 0.3s ease-out ${swirl.delay}s forwards` 
                   }} 
                 /> 
  
                 <circle 
                   cx={x2} 
                   cy={y2} 
                   r={swirl.strokeWidth * 1.5} 
                   fill="white" 
                   style={{ 
                     opacity: 0, 
                     animation: `fadeIn 0.3s ease-out ${swirl.delay + swirl.duration}s forwards` 
                   }} 
                 /> 
               </g> 
             ); 
           })} 
         </g> 
  
         {/* Checkmark Neon */} 
         {showCheck && ( 
           <g transform="translate(320, 420) scale(2.2)" style={{ animation: 'checkPop 0.5s ease-out forwards' }}> 
             <path 
               d="M 4 14 L 14 24 L 34 4" 
               stroke="#00FFFF" 
               strokeWidth="7" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               filter="url(#checkGlow)" 
               style={{ 
                 strokeDasharray: 100, 
                 strokeDashoffset: 100, 
                 animation: 'drawCheck 0.6s ease-out forwards' 
               }} 
             /> 
           </g> 
         )} 
       </svg> 
  
       <style jsx global>{` 
         @keyframes drawPath { 
           0% { stroke-dashoffset: 2000; opacity: 0; } 
           10% { opacity: 0.6; } 
           100% { stroke-dashoffset: 0; opacity: 0.8; } 
         } 
         @keyframes drawCheck { 
           to { stroke-dashoffset: 0; } 
         } 
         @keyframes checkPop { 
           0% { transform: translate(320, 420) scale(0); opacity: 0; } 
           70% { transform: translate(320, 420) scale(2.4); opacity: 1; } 
           100% { transform: translate(320, 420) scale(2.2); opacity: 1; } 
         } 
         @keyframes fadeIn { 
           to { opacity: 1; } 
         } 
       `}</style> 
     </div> 
   ); 
 }; 
  
 export default HurricaneLogo;
