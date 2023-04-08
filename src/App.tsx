import type { InputElementState } from "./types/InputElementState";
import DynamicForm from "./DynamicForm";

const createGitHubIssue = (title: string, content: unknown) => {
  const body = JSON.stringify({ title, body: content });
  console.log(body);
  const options = {
    method: "POST",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.GITHUB_TOKEN,
    },
    body,
  };

  fetch("https://api.github.com/repos/pReya/forms-test/issues", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

function App() {
  const value: InputElementState[] = [];

  return (
    <main>
      <h1 className="text-2xl font-bold my-6">Build your Git form</h1>
      <DynamicForm
        onSubmit={(formData) => {
          console.log("Saving to localStorage");
          localStorage.setItem("git-form", JSON.stringify(formData));
        }}
        value={value}
      />
    </main>
  );
}

export default App;
