import Loader from "components/loader";
import Rbox from "components/r-box";
import { Alert } from "components/ui/alert";
import { useGetInvalidEndpoint } from "services/hooks/InvalidEndPoint";

const ErrorMessagePage = () => {
  const { isLoading, isError, error } = useGetInvalidEndpoint();
  return (
    <Rbox title="Error Message Page" isBorder>
      {isLoading && <Loader />}
      {isError && (
        <Alert status="error" title={error.name}>
          {error.message}
        </Alert>
      )}
    </Rbox>
  );
};

export default ErrorMessagePage;
