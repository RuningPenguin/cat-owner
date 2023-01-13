export interface Userinfo {
	// @ApiProperty({ description: "用户名" })
	user_name: string;

	// @ApiProperty({ description: "昵称" })
	nike_name: string;

	// @ApiProperty({ description: "头像" })
	avatar: string;

	// @ApiProperty({ description: "手机号" })
	phone: string;

	// @ApiProperty({ description: "用户年龄" })
	age: number;

	// @ApiProperty({ description: "用户性别 0: 女， 1: 男, -1: 保密" })
	sex: number;

	// @ApiProperty({ description: "用户小程序openid" })
	openid: string;

	// @ApiProperty({ description: "用户小程序session_key" })
	session_key: string;

	// @ApiProperty({ description: "用户生日" })
	birthday: number;

	// @ApiProperty({ description: "用户创建时间" })
	create_at: Date;

	// @ApiProperty({ description: "用户更新时间" })
	update_at: Date;
}


export interface UserState {
	userinfo: Userinfo;
	token: string;
}

export interface UserStore {
	state: UserState;
	setUserinfo: any;
	setToken: any;
}
