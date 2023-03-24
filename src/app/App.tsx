import { Router } from "./routes";
import { UserLogProvider } from "./shared/contexts";

const App = () => {
  return (
    <UserLogProvider>
      <Router />
    </UserLogProvider>
  );
};

export default App;
