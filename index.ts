export function getLocalStorage<T>(name: string): T | undefined;
export function getLocalStorage<T>(name: string, defaultValue: T): T;
export function getLocalStorage<T>(
	name: string,
	defaultValue?: T
): T | undefined {
	try {
		const val = localStorage.getItem(name);
		return val ? JSON.parse(val) : defaultValue;
	} catch (e) {
		return defaultValue;
	}
}

export function setLocalStorage(name: string, value: unknown) {
	localStorage.setItem(name, JSON.stringify(value));
}
export function getSessionStorage<T>(name: string): T | undefined;
export function getSessionStorage<T>(name: string, defaultValue: T): T;
export function getSessionStorage<T>(
	name: string,
	defaultValue?: T
): T | undefined {
	try {
		const val = sessionStorage.getItem(name);
		return val ? JSON.parse(val) : defaultValue;
	} catch (e) {
		return defaultValue;
	}
}

export function setSessionStorage(name: string, value: unknown) {
	sessionStorage.setItem(name, JSON.stringify(value));
}
