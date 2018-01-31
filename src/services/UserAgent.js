class UserAgent {
	constructor(opts) {
		//this.databaseURL = opts.databaseURL;
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	getWidth = () => {
		return this.width;
	}

	getHeight = () => {
		return this.height;
	}
}

let userAgentSingleton = null;

export default function (opts) {
	if (!userAgentSingleton) {
		userAgentSingleton = new UserAgent(opts);
	}

	return userAgentSingleton;
}
