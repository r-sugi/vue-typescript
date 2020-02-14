import { $axios } from "@/plugins/axios";
import { GithubUsers } from "@/lib/api/type";

export class GithubApi {
  static fetchUsers(): Promise<GithubUsers> {
    const url = "https://api.github.com/sers";
    return $axios.get<GithubUsers>(url);
  }
}
