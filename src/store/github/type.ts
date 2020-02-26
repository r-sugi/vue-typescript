import { GithubUser } from "./class";

interface S {
  users: GithubUser[] | never[];
}

interface G {
  users: GithubUser[] | never[];
}

interface RG {
  "github/users": G["users"];
}

interface M {
  setGithubUsers: GithubUser[];
}

interface RM {
  "github/setGithubUsers": M["setGithubUsers"];
}

interface A {
  fetchGithubUsers: GithubUser[];
}

interface RA {
  "github/fetchGithubUsers": A["fetchGithubUsers"];
}

export { S, G, M, RM, A, RA, RG };
