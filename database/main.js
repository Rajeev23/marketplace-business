export default class {
	static getDeviceWidth(deviceJson) {
		if (deviceJson.device === 'desktop') {
			return 1200;
		} else if (deviceJson.device === 'other') {
			return 800;
		}
		return 200;
	}
	
	
}