// 本地存储
class Storage {
	_get(key: string, async: boolean = false) {
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

	_set(key: string, value: any, async: boolean = false) {
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

	_remove(key: string, async: boolean = false) {
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

	_clear(async: boolean = false) {
		if (async) {
			return uni.clearStorage();
		} else {
			return uni.clearStorageSync();
		}
	}

	_info(async: boolean = false) {
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
}

export default function useStorage() {
	const storageExample = new Storage();

	const get = (key: string, async?: boolean) => {
		try {
			return storageExample._get(key, async);
		} catch (e) {
			console.error("Store get error:", e);
		}
	};

	const set = (key: string, val: any, async?: boolean) => {
		try {
			return storageExample._set(key, val, async);
		} catch (e) {
			console.error("Store set error:", e);
		}
	};

	const remove = (key: string, async?: boolean) => {
		try {
			return storageExample._remove(key, async);
		} catch (e) {
			console.error("Store remove error:", e);
		}
	};

	const info = (async?: boolean) => {
		try {
			return storageExample._info(async);
		} catch (e) {
			console.error("Store info error:", e);
		}
	};

	const clear = (async?: boolean) => {
		try {
			return storageExample._clear(async);
		} catch (e) {
			console.error("Store clear error:", e);
		}
	};

	const storage = { get, set, remove, clear, info };

	return { storage, ...storage };
};


