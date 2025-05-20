import {create} from 'zustand'; // is se ham state store create kar sakty hain.
import { persist } from 'zustand/middleware'; // persist ek middleware hai jo state ko LocalStorage (ya SessionStorage) mein save karta hai.

type State = {  // State naam ki custom type bana raha ha
    count: number;         // is property mein number value store hogi.
    increment: ()=> void;  // increment naam ka function—no arguments kuch return nahi karta.
    decrement: () =>void   // decrement naam ka function—no arguments kuch return nahi karta.
}

// is naam se useCount ke ham store/hook bana rhy hain memory managemanet ke liye.
export const useCount = create(  // create => store bnata hai.
 // persist ek middleware hai jo hmari state ko LocalStorage mein save aur load karta hai, taake page refresh ke baad bhi data save rahe.
    persist<State>((set) => (  // (set) => ({…}): Yeh function define karta hai initial state (count: 0) aur updaters (increment, decrement)

    {
    // State/variable/property
    count: 0,

    // manipulator => state ko modify karega.
    // set(...): Ye Zustand ka special function hai jo store ki state ko update karta hai.
    increment: () => set( (state: {count: number}) => ({count: state.count + 1}) ), // state: {count: number} isliye diya gaya ke hum sirf count property ko nikal kar use kar rahe hain warna ye pora object hai increment or derement function ke sath.
    decrement: () => set( (state: {count: number}) => ({count: state.count - 1}) ),

    }

), { name: 'position-storage' } )) //  Configuration state browser ke LocalStorage key position-storage ke naam se save hogi.


