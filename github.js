class GitHub{
    constructor(){
        this.client_id="f829ee625aa49708973f";
        this.client_secret="eedcfdbb8aa606bea47355f7ae747e2c91e3f573";
        this.repos_count=5;
        this.repos_sort="created:asc";
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile =await profileResponse.json();
        const repos = await repoResponse.json();
        return {profile:profile,repos:repos};
    }
}