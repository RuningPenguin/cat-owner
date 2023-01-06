// 本地存储
class Storage {
	private _get(key: string, async: boolean = false) {
		if (async) {
			return new Promise((resolve, reject) => {
				uni.getStorage({
					key: key,
					success: (res) => resolve(res.data),
					fail: (err) => reject(err)
				});
			});
		} else {
			return uni.getStorageSync(key);
		}
	}

	private _set(key: string, value: any, async: boolean = false) {
		if (async) {
			return new Promise((resolve, reject) => {
				uni.setStorage({
					key: key,
					data: value,
					success: (res) => resolve(res),
					fail: (err) => reject(err)
				});
			});
		} else {
			return uni.setStorageSync(key, value);
		}
	}

	private _remove(key: string, async: boolean = false) {
		if (async) {
			return new Promise((resolve, reject) => {
				uni.removeStorage({
					key: key,
					success: (res) => resolve(res),
					fail: (err) => reject(err)
				});
			});
		} else {
			return uni.removeStorageSync(key);
		}
	}

	private _clear(async: boolean = false) {
		if (async) {
			return uni.clearStorage();
		} else {
			return uni.clearStorageSync();
		}
	}

	private _info(async: boolean = false) {
		if (async) {
			return new Promise((resolve, reject) => {
				uni.getStorageInfo({
					success: (res) => resolve(res),
					fail: (err) => reject(err)
				});
			});
		} else {
			return uni.getStorageInfoSync();
		}
	}

	// public
	get(key: string, async?: boolean) {
		try {
			return this._get(key, async);
		} catch (e) {
			console.error("Store get error:", e);
		}
	}

	set(key: string, val: any, async?: boolean) {
		try {
			return this._set(key, val, async);
		} catch (e) {
			console.error("Store set error:", e);
		}
	}

	remove(key: string, async?: boolean) {
		try {
			return this._remove(key, async);
		} catch (e) {
			console.error("Store remove error:", e);
		}
	}

	info(async?: boolean) {
		try {
			return this._info(async);
		} catch (e) {
			console.error("Store info error:", e);
		}
	}

	clear(async?: boolean) {
		try {
			return this._clear(async);
		} catch (e) {
			console.error("Store clear error:", e);
		}
	}
}

const useStorage= () : { storage: Storage } => {
	const storage = new Storage();
	return { storage };
}
// 不可解构
export default useStorage

