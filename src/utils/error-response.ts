const errorResponse = (res: any, output: any) => {
	return res.status(output.statusCode).send(output.payload);
};

export default errorResponse;
