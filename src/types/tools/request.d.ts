export interface config {
	method: "GET" | "POST" | "PUT" | "DELETE",
	header?: { [x: string]: any },
	[x: string]: any
}
