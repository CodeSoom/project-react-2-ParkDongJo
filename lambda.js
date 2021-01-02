const serverless = require('serverless-http')
import app from "./server"

const binaryMimeTypes = [
	"application/javascript",
	"application/json",
	"application/octet-stream",
	"application/xml",
	"binary/octet-stream",
	"image/jpeg",
	"image/png",
	"image/gif",
	"text/comma-separated-values",
	"text/css",
	"text/html",
	"text/javascript",
	"text/plain",
	"text/text",
	"text/xml",
	"image/x-icon",
	"image/svg+xml",
	"application/font-woff2",
	"application/font-woff",
	"font/woff",
	"font/woff2"
]

exports.handler = (event, context, callback) => {
	const handle = serverless(app, {
		binary: binaryMimeTypes
	})
	handle(event, context, callback)
};
