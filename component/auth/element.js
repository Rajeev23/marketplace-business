
export const validateEmail = (value) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(value);
};

export const validatePhoneNumber = (value) => {
	const phoneFormat1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
	const phoneFormat2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	const phoneFormat3 = /^\d{10}$/;
	if (value.match(phoneFormat1) || value.match(phoneFormat2) || value.match(phoneFormat3)) {
		return true;
	}
	return false;
}
