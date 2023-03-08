const Employee = require('./Employee');

class GithubEngineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        if (!github) {
            throw new Error('Github username cannot be null or undefined');
        }
        this.github = github;
    };

    getGithub = () => this.github;

    getRole = () => 'Engineer';
};

module.exports = GithubEngineer;
