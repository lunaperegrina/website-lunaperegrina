import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
	throw new Error("AWS credentials are not set in environment variables.");
}

const dynamoClient = new DynamoDBClient({
	region: "us-east-2",
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
});

export default dynamoClient;
