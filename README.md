# Tca_Plugin_Action
This action uses Tencent Cloud Code Analysis (TCA for short, code-named CodeDog inside the company early) to analyze code.

## Inputs

### label
- type: String
- required: 否
- default: open-standard
- 规则标签，可选值: open-standard(开源合规检查), open-source(对外开源检查)。默认值：open-standard。

## Outputs

output result in logs.

## Example usage
```
name: 'TCA'
on: [push]

jobs:
  CodeAnalysis:
    runs-on: ubuntu-latest
    name: code analysis
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: TCA
        uses: bensonhome/Tca_Plugin_Action@master
        with:
          label: 'open_source_check'
```