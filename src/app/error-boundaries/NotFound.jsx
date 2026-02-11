import { Button } from "@/shared/ui";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-125 bg-primary/20 rounded-full blur-[100px] opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-0 right-0 size-125 bg-secondary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 size-125 bg-info/10 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Animated 404 Number */}
        <div className="relative select-none">
          <h1
            className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-secondary to-secondary/10 animate-[float_6s_ease-in-out_infinite]"
            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
          >
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5 bg-black/5 blur-xl rotate-[-5deg] rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 -mt-8 md:-mt-16 animate-[slide-up_0.5s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-bold text-heading-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto">
            Looks like you've hit an empty page. The page you're trying to find
            might have been moved, deleted, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group min-w-50 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <Link to="/" className="flex items-center gap-2">
                <FaArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="min-w-50">
              <Link to="/contact">Report Issue</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-8 text-sm text-muted-foreground/50">
        Error Code: 404 • Resource Not Found
      </div>
    </div>
  );
};

export default NotFound;
