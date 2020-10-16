SHELL=/bin/bash

# import env variables
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

STAGE ?= dev
APP_NAME:=portfolio
DOMAIN:=zacstrangeway.com
GITHUB_OWNER:=zstrangeway
GITHUB_REPO:=portfolio
GITHUB_BRANCH:=master # TODO: change to develop for dev

# Stack names
PROJECT:=${STAGE}-${APP_NAME}
PIPELINE:=${PROJECT}-pipeline

# BUILD Resource names, paths and buckets
BUILD_DIR:=dist
TEMPLATE_FILE:=template.yml
OUTPUT_FILE:=${BUILD_DIR}/${TEMPLATE_FILE}
DEPLOYMENT_BUCKET:=${PROJECT}-deployment-files
ARTIFACT_BUCKET:=${PROJECT}-artifacts

# Webapp buckets
FRONT_END_BUCKET:=${PROJECT}-frontend
FRONT_END_LOG_BUCKET:=${FRONT_END_BUCKET}-logs

# URLs
API_DOMAIN:=dev-api.${DOMAIN}
FRONTEND_DOMAIN:=dev.${DOMAIN}

# Overide values if prod
ifeq (${STAGE}, prod)
		GITHUB_BRANCH:=master
		API_DOMAIN:=api.${DOMAIN}
		FRONTEND_DOMAIN:=${DOMAIN}
endif

.PHONY: create_deploy_bucket
create_deploy_bucket:
	# create the deployment bucket in S3 case it doesn't exist
	aws s3 mb s3://${DEPLOYMENT_BUCKET}
	aws s3api put-bucket-tagging \
		--bucket ${DEPLOYMENT_BUCKET} \
		--tagging "TagSet=[{Key=environment,Value=${STAGE}},{Key=service,Value=deployment}]"

.PHONY: build
build:
	# Build application for dev, override STAGE=prod to deploy to prod

	# Return error code 1 if value of STAGE is invalid
	if [ ${STAGE} != "dev" ] && [ ${STAGE} != "prod" ]; then \
		echo ${STAGE} is not a valid input for STAGE.; \
		exit 1; \
	fi;
	
	# make local directory for generated cloudformation templates
	rm -rf ${BUILD_DIR}
	mkdir ${BUILD_DIR}

	# compile typescript packages
	rm -rf ./dist
	npm run build

	# generate cloudformation templates
	sam package \
    --template-file ${TEMPLATE_FILE} \
    --output-template-file ${OUTPUT_FILE} \
    --s3-bucket ${DEPLOYMENT_BUCKET}

.PHONY: deploy
deploy:
	# Deploy cloudformation and lambdas to dev, override STAGE=prod to deploy to prod

	# Return error code 1 if value of STAGE is invalid
	if [ ${STAGE} != "dev" ] && [ ${STAGE} != "prod" ]; then \
		echo ${STAGE} is not a valid input for STAGE.; \
		exit 1; \
	fi;

	make build

	sam deploy \
    --template-file ${OUTPUT_FILE} \
    --stack-name ${PROJECT} \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --parameter-overrides \
			Environment=${STAGE} \
			HostedZone=${DOMAIN} \
			ApiDomainName=${API_DOMAIN} \
			FrontendDomainName=${FRONTEND_DOMAIN} \
			FrontendRootBucketName=${FRONT_END_BUCKET} \
			FrontendLogBucketName=${FRONT_END_LOG_BUCKET}

	# deploy web applications to S3
	aws s3 sync ./dist/frontend s3://${FRONT_END_BUCKET}
