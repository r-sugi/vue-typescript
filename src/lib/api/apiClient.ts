import axios from "axios";
import { GithubUsers } from "./type";

export class GithubApi {
  private static $axios = axios.create();

  static fetchUsers(): Promise<GithubUsers> {
    const url = "https://api.github.com/users";
    return this.$axios.get<GithubUsers>(url);
  }
}
