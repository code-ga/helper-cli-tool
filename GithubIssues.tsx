import { useEffect, useState } from "react";
import gitRemoteOriginUrl from "git-remote-origin-url";
import Table from "./components/Table";
import { Spinner, Alert } from "@inkjs/ui";

export const GithubIssues = ({ args }: { args: string[] }) => {
  const [issues, setIssues] = useState<{ [key: string]: any }>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // const { owner, repo } = await ParseRepoUrl();
      // if (!owner || !repo) {
      //   setError("Invalid repository url");
      //   setLoading(false);
      //   return;
      // }
      const res = await fetch(
        `https://api.github.com/repos/${"vercel"}/${"vercel"}/issues?per_page=${
          args[0] || 10
        }`
      );

      if (res.ok) {
        const data = await res.json();
        setIssues(data);
      } else {
        setError(res.statusText);
      }

      setLoading(false);
    })();
  }, []);

  return loading ? (
    <Spinner label="Loading"></Spinner>
  ) : error ? (
    <Alert variant="error">{error}</Alert>
  ) : (
    <Table
      data={issues.map((issue) => ({
        title: issue.title,
        number: issue.number,
        state: issue.state,
        openAt: issue.created_at,
        createdBy: issue.user.login,
      }))}
    ></Table>
  );
};

async function ParseRepoUrl() {
  const repoUrl = await gitRemoteOriginUrl();
  let owner: string = "";
  let repo: string = "";
  if (repoUrl.startsWith("https://github.com/")) {
    owner = repoUrl.split("https://github.com/")[1].split("/")[0];
    repo = repoUrl.split("https://github.com/")[1].split("/")[1];
  } else if (repoUrl.startsWith("git@github.com:")) {
    owner = repoUrl.split("git@github.com:")[1].split("/")[0];
    repo = repoUrl.split("git@github.com:")[1].split("/")[1].split(".git")[0];
  }

  return { owner, repo };
}
