import MyComponent from "@/components/MyComponent";
import TestComponent from "@/components/testComponent";

export default function Home() {
  return (
   <div className="h-screen w-full bg-[#f3f4f6] flex justify-center items-center gap-4">
     <TestComponent/>
     <MyComponent/>
   </div>
  );
}
