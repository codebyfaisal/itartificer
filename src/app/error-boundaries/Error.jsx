import { useRouteError } from "react-router"

const Error = ({ reset }) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>{error?.message || 'An unexpected error occurred'}</p>
      {reset && (
        <button onClick={() => reset()}>
          Try again
        </button>
      )}
    </div>
  )
}

export default Error