import { Circle, Plus, Triangle } from "lucide-react";

const PageHeader = ({ title }) => {
  return (
    <div className="relative min-h-[30vh] flex items-center justify-center bg-background w-full">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
        {/* Subtle Wave */}
        <div className="absolute bottom-0 w-full h-30 bg-[url('/images/wave.svg')] bg-cover opacity-5"></div>

        {/* Decorator Shapes */}
        <div className="absolute top-[20%] left-[10%] text-primary animate-[float_6s_ease-in-out_infinite]">
          <Plus size={28} strokeWidth={3} className="opacity-40" />
        </div>

        <div className="absolute bottom-[25%] left-[20%] text-secondary animate-[float_8s_ease-in-out_infinite_1s]">
          <Circle size={18} strokeWidth={3} className="opacity-30" />
        </div>

        <div className="absolute top-[15%] right-[15%] text-primary animate-[float_7s_ease-in-out_infinite_2s]">
          <Plus size={24} strokeWidth={3} className="rotate-45 opacity-40" />
        </div>

        <div className="absolute top-[40%] right-[8%] text-secondary animate-[float_5s_ease-in-out_infinite]">
          <Triangle
            size={22}
            strokeWidth={3}
            className="rotate-12 fill-secondary/10 opacity-30"
          />
        </div>

        <div className="absolute bottom-[10%] right-[25%] text-primary animate-[float_9s_ease-in-out_infinite_1.5s]">
          <Triangle
            size={16}
            strokeWidth={3}
            className="rotate-12 fill-primary/10 opacity-30"
          />
        </div>

        {/* Gradient Blobs */}
        <div className="absolute -top-25 -left-25 w-75 h-75 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute top-[20%] -right-25 w-75 h-75 bg-secondary/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Content */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-secondary tracking-tight capitalize max-w-3xl text-center">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
