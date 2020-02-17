import { $axios } from "@/plugins/axios";
import { RequestGithubUser } from "@/lib/api/type";

export class GithubApi {
  static fetchUsers(): Promise<RequestGithubUser> {
    const url = "https://api.github.com/users";
    return $axios.get<RequestGithubUser>(url);
  }
}
