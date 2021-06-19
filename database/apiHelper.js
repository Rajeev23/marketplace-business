const invalidRequest = { status: 400, message: 'malformed request' };
const unauthorizedRequest = { status: 401, message: 'Unauthorized request' };

function wellFormed(json, fields, optional) {

	const response = {};

	if (!fields || fields.length === 0) {
		return response;
	}

	for (let i = 0; i < fields.length; i++) {
		const field = fields[i];

		if (!optional && (json[field] === 'undefined' || json[field] === 'null' ||
			json[field] === undefined || json[field] === null)) {

			return false;
		}

		response[field] = json[field];
	}

	return response;
}

// TODO: add proper loggers,
// cannot identify which function and parameters
// are being provided for execution
async function apiHelperFunction(
	func,
	request,
	response,
	requiredParameters,
	optionalParameters = [],
	userParameters = [],
) {
	try {
		let requestValues = {};
		let userJson = {};

		requestValues.url = request.url;

		if (request.params) {
			requestValues = Object.assign(requestValues, request.params);
		}

		if (request.query) {
			requestValues = Object.assign(requestValues, request.query);
		}

		if (request.body) {
			requestValues = Object.assign(requestValues, request.body);
		}

		if (request.headers) {
			requestValues = Object.assign(requestValues, request.headers);
		}

		const requiredJson = wellFormed(requestValues, requiredParameters, false);

		if (!requiredJson) {
			return response.status(400).send(invalidRequest);
		}

		const optionalJson = wellFormed(requestValues, optionalParameters, true);

		if (userParameters.length > 0 && !request.user) {
			return response.status(401).send(unauthorizedRequest);
		}

		if (request.user) {
			userJson = wellFormed(request.user, userParameters, true);
		}

		const finalParams = {
			...requiredJson,
			...optionalJson,
			...userJson,
			req: request,
			res: response,
		};

		const results = await func(finalParams);
		return response.status(200).json(results);
	}
	catch (exception) {
		if (typeof exception === typeof {}) {
			let statusCode = 500;
			let errorMessage = {};

			if (exception.status) {
				statusCode = exception.status;
			}

			if (exception.errors) {
				errorMessage.Error = exception.errors;
			}

			errorMessage.ErrorCode = statusCode;

			logger.log('errors', exception, exception.stack);
			sentry.captureException(exception, {req: request, res: response});
			return response.status(statusCode).json(errorMessage);
		}

		logger.log('errors', exception, exception.stack);
		sentry.captureException(exception, {req: request, res: response});
		return response.status(500).json({
			errors: 'Unexpected error',
			status: false,
			success: false
		});
	}
}



module.exports = {
	apiHelperFunction
};

return module.exports;
