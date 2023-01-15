import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConfigStackProps } from './config';
import { MyValidator } from './my-validator';

export class CdkAddValidationStack extends cdk.Stack {
  private scopeType: string;

  constructor(scope: Construct, id: string, props: ConfigStackProps) {
    super(scope, id, props);
    this.init(props);
    /* 以下リソース作成処理 */
  }

  private init(props: ConfigStackProps) {
    this.scopeType = props.config.scopeType;
    /* 以下バリデート処理 */
    const validator = new MyValidator(this.scopeType, this.region);
    this.node.addValidation(validator);
  }
}
