#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkAddValidationStack } from '../lib/cdk-add-validation-stack';
import { configStackProps } from '../lib/config';

const app = new cdk.App();
new CdkAddValidationStack(app, 'CdkAddValidationStack', configStackProps);