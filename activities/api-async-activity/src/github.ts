import axios from "axios";

export async function getUserFromGithub(user: string) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (error: any) {
    console.log("Usuário não existe");
  }
}

export async function getRepositories(repo: string) {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repo}`)
    console.log(response.data);
  } catch (error: any) {
    console.log("Repositório não existe");
  }
}


