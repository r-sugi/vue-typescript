import { GithubUserImpl } from "./class";

interface S {
  users: [];
}

interface G {
  users: [];
}

interface RG {
  "github/users": G["users"];
}

interface M {
  setGithubUsers: [];
}

interface RM {
  "github/setGithubUser": M["setGithubUsers"];
}

interface A {
  fetchGithubUsers: [];
}

interface RA {
  "github/fetchGithubUserImpls": A["fetchGithubUsers"];
}

export { S, G, M, RM, A, RA, RG };
