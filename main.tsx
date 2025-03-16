import { render, Text } from "ink";
import { HelpPage } from "./Help";
import { ComponentListPage } from "./ComponentList";
import InitForm from "./InitForm";
import { DownloadPage } from "./DownloadPage";
import { GithubIssues } from "./GithubIssues";

const MainPage = () => {
  const args = process.argv.slice(2);

  if (args[0] === "--help" || args[0] === "-h") {
    return <HelpPage />;
  } else if (args[0] === "--version" || args[0] === "-v") {
    return <Text>version 1.0.0</Text>;
  } else if (args[0] == "components") {
    if (args[1] == "list") {
      return <ComponentListPage></ComponentListPage>;
    } else if (args[1].startsWith("download")) {
      return <DownloadPage args={args.slice(2)} />;
    } else if (args[1] == "init") {
      return <InitForm />;
    }
  }else if (args[0] == "github") {
    if (args[1] == "issues") {
      return <GithubIssues args={args.slice(2)}/>;
    }
  }

  return <Text>use --help or -h for help page</Text>;
};

render(<MainPage />);
