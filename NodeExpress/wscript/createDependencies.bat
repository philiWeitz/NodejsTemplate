
cd /D %~dp0

cd ..
cd ..
cd NodeBusinessLogic
call npm link

cd ..
cd NodeExpress
call npm link NodeBusinessLogic