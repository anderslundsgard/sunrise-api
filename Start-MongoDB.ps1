New-Item 'c:\mongodb' -Type Directory -Force

Start-Process 'C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe' -ArgumentList '--dbpath=c:\mongodb --logpath=c:\mongodb\log.txt --install' -Wait

Start-Service MongoDB