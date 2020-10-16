import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { SES } from "aws-sdk";
import ContactService from "./service";

const ses = new SES();
const contactService = new ContactService(ses);

exports.post = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return await contactService.addContact(event, context);
};
