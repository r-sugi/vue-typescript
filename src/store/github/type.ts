interface S {
  users: GithubUsers | never[];
}

interface G {}

interface M {
  setUsers: GithubUsers;
}

interface RM {
  "github/setUsers": M["setUsers"];
}

interface A {
  asyncFetchUsers: GithubUsers;
}

interface RA {
  "github/asyncFetchUsers": A["asyncFetchUsers"];
}

export { S, G, M, RM, A, RA };
