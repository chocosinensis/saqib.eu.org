import { motion } from 'framer-motion';

const Plant = () => (
  <svg viewBox="0 0 1470 244" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="filter0_d" x="-26.5006" y="0.577217" width="1496" height="242.776" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="12.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.964706 0 0 0 0 0.890196 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
    <g filter="url(#filter0_d)">
      <motion.path
        d="M1 120C94.3333 160.667 316.2 217.6 457 120C479.667 100.667 511.4 57.4 457 39" stroke="#56F6E3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
      />
      <motion.path
        d="M455 121.5C547.667 51 770 -47.7 918 121.5C936.667 143.5 962.8 193.1 918 215.5" stroke="#56F6E3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.path
        d="M917 120C1004 192.333 1220.4 293.6 1390 120M1390 120C1391.5 103.333 1385.5 70 1349.5 70C1364.83 70.3333 1394.4 80.8 1390 120ZM1390 120C1402.83 114.167 1431.2 113.3 1442 156.5M1390 120L1399 110L1421 87" stroke="#56F6E3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
      />
    </g>
  </svg>
);

export default Plant;
