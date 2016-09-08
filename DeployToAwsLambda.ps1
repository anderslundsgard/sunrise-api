## Pre-Req: 
# aws configure
# with access and security keys

# Create Deploy package
Compress-Archive ./** -Update -DestinationPath '.\sunrise.zip'

Start-Sleep -Seconds 5

# Deploy to Lambda latest version
aws lambda update-function-code --function-name 'sunrise' --zip-file 'fileb://.\sunrise.zip' --publish 
