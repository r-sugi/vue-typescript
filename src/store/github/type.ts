import { GithubUserImpl } from "./class";

interface S {
  users: GithubUserImpl[] | [];
}

interface G {
  users: GithubUserImpl[] | [];
}

interface RG {
  "github/users": G["users"];
}

interface M {
  setGithubUsers: GithubUserImpl[];
}

interface RM {
  "github/setGithubUser": M["setGithubUsers"];
}

interface A {
  fetchGithubUsers: GithubUserImpl[];
}

interface RA {
  "github/fetchGithubUserImpls": A["fetchGithubUsers"];
}

export { S, G, M, RM, A, RA, RG };
