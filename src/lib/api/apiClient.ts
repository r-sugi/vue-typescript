import { $axios } from "@/plugins/axios";
import { RequestGithubUser } from "@/lib/api/type";

export class GithubApi {
  static fetchUsers(): any {
    const url = "/users";
    return $axios({
      baseURL: 'https://api.github.com',
      url
    });
  }
}
