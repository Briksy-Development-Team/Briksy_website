// type RangeSliderProps = {
//   min: number;
//   max: number;
//   value: [number, number];
//   onChange: (v: [number, number]) => void;
//   format?: (v: number) => string;
//   step?: number;
// };

// export default function RangeSlider({
//   min, max, value: [lo, hi], onChange, format = String, step = 1,
// }: RangeSliderProps) {
//   const pct = (v: number) => ((v - min) / (max - min)) * 100;

//   return (
//     <div className="pb-8 pt-2">
//       <div className="relative h-5">
//         <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-gray-200">
//           <div
//             className="absolute h-full rounded-full bg-[#3D2C1D]"
//             style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }}
//           />
//         </div>
//         <input
//           type="range" min={min} max={max} step={step} value={lo}
//           onChange={(e) => onChange([Math.min(+e.target.value, hi - step), hi])}
//           className="dual-range-input"
//           style={{ zIndex: lo >= hi - step ? 5 : 3 }}
//         />
//         <input
//           type="range" min={min} max={max} step={step} value={hi}
//           onChange={(e) => onChange([lo, Math.max(+e.target.value, lo + step)])}
//           className="dual-range-input"
//           style={{ zIndex: 4 }}
//         />
//       </div>
//       <div className="mt-5 flex justify-between text-sm font-medium text-gray-600">
//         <span>{format(lo)}</span>
//         <span>{format(hi)}</span>
//       </div>
//     </div>
//   );
// }

// // ─── Option-backed range (for curated price/land-size lists) ─────────────────
// type Option = { value: number; label: string };

// type OptionRangeSliderProps = {
//   options: Option[];
//   value: [number, number]; // actual values, e.g. [200000, 800000]
//   onChange: (v: [number, number]) => void;
// };

// export function OptionRangeSlider({ options, value, onChange }: OptionRangeSliderProps) {
//   const indexOf = (v: number) => Math.max(0, options.findIndex((o) => o.value === v));
//   const loIdx = indexOf(value[0]);
//   const hiIdx = value[1] === 0 ? options.length - 1 : indexOf(value[1]);

//   return (
//     <RangeSlider
//       min={0}
//       max={options.length - 1}
//       step={1}
//       value={[loIdx, hiIdx]}
//       onChange={([lo, hi]) => onChange([options[lo].value, options[hi].value])}
//       format={(i) => options[i].label}
//     />
//   );
// }  
