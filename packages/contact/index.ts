import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import ContactService from "./service";
import { SES } from "aws-sdk";

const ses = new SES();
const contactService = new ContactService(ses);

exports.post = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return await contactService.addContact(event);
};
