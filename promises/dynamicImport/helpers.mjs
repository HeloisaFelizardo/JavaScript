export default class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

export const canVote = (age) => {
	return age >= 18;
};
