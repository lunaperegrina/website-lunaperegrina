import dynamoClient from "@/lib/aws";
import {
	PutItemCommand,
	type PutItemCommandInput,
	QueryCommand,
	type QueryCommandInput,
} from "@aws-sdk/client-dynamodb";
import { type NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
// 	try {
// 		const data = req.body;
// 		const UserId = searchParams.get("did");
// 		const StartDate = searchParams.get("startDate");
// 		const EndDate = searchParams.get("endDate");
// 		const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP';

// 		if (!UserId || !StartDate || !EndDate) {
// 			return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
// 		}

// 		const params: QueryCommandInput = {
// 			TableName: "bluesky-followers",
// 			KeyConditionExpression: "UserId = :userId AND MetricDate BETWEEN :start AND :end",
// 			ExpressionAttributeValues: {
// 				":userId": { S: UserId },
// 				":start": { S: StartDate },
// 				":end": { S: EndDate },
// 			},
// 		};

// 		const command = new QueryCommand(params);
// 		const result = await dynamoClient.send(command);

// 		if (!result.Items || result.Items.length === 0) {
// 			return NextResponse.json({ message: "No data found" }, { status: 404 });
// 		}

// 		return NextResponse.json(result.Items, { status: 200 });
// 	} catch (error) {
// 		console.error(error);
// 		return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
// 	}
// }

export async function POST(req: NextRequest) {

	try {
		const body = await req.json();
		const { userId, browser, os, device, viewLink } = body;

		if (!browser || !os || !device || !viewLink || !userId) {
			return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
		}

		const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown IP';
		const country = req.geo?.country || 'Unknown Country';
		const city = req.geo?.city || 'Unknown City';
		const region = req.geo?.region || 'Unknown Region';

		const params: PutItemCommandInput = {
			TableName: "biolink-infos",
			Item: {
				UserId: { S: userId },
				MetricDate: { S: new Date().toISOString() },
				Browser: { S: browser.toString() },
				OS: { S: os.toString() },
				Device: { S: device.toString() },
				IP: { S: ip.toString() },
				Country: { S: country.toString() },
				City: { S: city.toString() },
				Region: { S: region.toString() },
				ViewLink: { S: viewLink.toString() },
			},
		};

		const data = {
			UserId: userId,
			MetricDate: new Date().toISOString(),
			Browser: browser.toString(),
			OS: os.toString(),
			Device: device.toString(),
			IP: ip.toString(),
			Country: country.toString(),
			City: city.toString(),
			Region: region.toString(),
			ViewLink: viewLink.toString(),
		};

		console.log(data)

		const command = new PutItemCommand(params);
		const result = await dynamoClient.send(command);
		console.log(result);
		dynamoClient.destroy();

		return NextResponse.json({ message: "Data inserted successfully" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error inserting data" }, { status: 500 });
	}
}
