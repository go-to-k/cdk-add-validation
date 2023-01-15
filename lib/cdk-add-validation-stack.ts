import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkAddValidationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.validate();
    /* 以下リソース作成処理 */
  }

  private validate() {
    /* 以下バリデート処理 */
  }
}
