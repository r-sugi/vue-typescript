import { GithubUser } from "@/types/classes";

export class GithubUserDTO implements GithubUser {
  login = "";
  id = 0;
  node_id = "";
  avatar_url = "";
  gravatar_id = "";
  url = "";
  html_url = "";
  followers_url = "";
  following_url = "";
  gists_url = "";
  starred_url = "";
  subscriptions_url = "";
  organizations_url = "";
  repos_url = "";
  events_url = "";
  received_events_url = "";
  type = "";
  site_admin = false;
  name = "";
  company: string | null = "";
  blog = "";
  location = "";
  email: string | null = "";
  hireable = "";
  bio: string | null = "";
  public_repos = 0;
  public_gists = 0;
  followers = 0;
  following = 0;
  created_at = "";
  updated_at = "";
}

export class GithubUserImpl extends GithubUserDTO {
  constructor(dto: GithubUserDTO) {
    super();
    Object.assign(this, dto);
  }

  get hoge(): string {
    return `${this.followers_url} / ${this.following_url}`;
  }
}
