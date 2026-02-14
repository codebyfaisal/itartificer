import { useRouteError, Link } from "react-router";
import { Button } from "@/shared/ui";
import { FaExclamationTriangle } from "react-icons/fa";
import SEO from "@/shared/components/SEO";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      <SEO title="Error" description="An unexpected error occurred." />

      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-125 bg-destructive/10 rounded-full blur-[100px] opacity-50" />

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto space-y-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-destructive/10 rounded-full">
            <FaExclamationTriangle className="size-16 text-destructive" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          Something went wrong!
        </h1>

        <p className="text-muted-foreground text-lg">
          {error?.message ||
            error?.statusText ||
            "An unexpected error occurred while processing your request."}
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            className="shadow-lg shadow-destructive/20 hover:shadow-destructive/40"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
          <div className="mt-4">
            <Link
              to="/"
              className="text-primary hover:underline underline-offset-4"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
