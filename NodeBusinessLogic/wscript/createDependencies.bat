
cd /D %~dp0

cd ..
cd ..
cd NodeDatamodel
call npm link

cd ..
cd NodeBusinessLogic
call npm link NodeDatamodel