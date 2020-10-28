import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ErrorResponse, SuccessResponse } from "./helpers/Response";
import { SES } from "aws-sdk";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import { checkParams } from "./helpers/checkParams";

export default class ContactService {
  ses: SES;

  constructor(ses: SES) {
    this.ses = ses;
  }

  addContact = async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    if (!event.body)
      return new ErrorResponse(400, "Error: Request missing body.");

    const body = JSON.parse(event.body);
    const missingParams = checkParams(body, [
      "email",
      "name",
      "subject",
      "message",
    ]);
    if (missingParams.length > 0)
      return new ErrorResponse(
        400,
        `Unable to process request. Missing parameters: ${missingParams.join(
          ", "
        )}`
      );

    const contact = {
      email: body.email,
      name: body.name,
      subject: body.subject,
      message: body.message,
    };

    const emailSubject = `New message from Portfolio website: ${body.subject}`;
    const emailMessage = `Name: ${body.name}
  
Email: ${body.email}

Subject: ${body.subject}

Message:

${body.message}`;

    const params: SendEmailRequest = {
      Source: `${process.env.FROM_EMAIL}`,
      Destination: {
        ToAddresses: [`${process.env.TO_EMAIL}`],
      },
      Message: {
        Subject: { Data: emailSubject },
        Body: {
          Text: { Data: emailMessage },
        },
      },
    };

    try {
      await this.ses.sendEmail(params).promise();
      return new SuccessResponse(JSON.stringify(contact));
    } catch (err) {
      // TODO: Add logger
      console.log(err);
      return new ErrorResponse(
        500,
        "Something went wrong. Unable to send message at this time."
      );
    }
  };
}
