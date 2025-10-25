@echo off
REM Batch file to set up React Native Android development environment and run the app

echo Setting up React Native Android development environment...

REM Set Java environment variables
set JAVA_HOME=C:\Program Files\Zulu\zulu-17
set ANDROID_HOME=C:\Users\DELL\AppData\Local\Android\Sdk

REM Add Java and Android tools to PATH
set PATH=%PATH%;%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools\bin

echo Environment variables set:
echo JAVA_HOME=%JAVA_HOME%
echo ANDROID_HOME=%ANDROID_HOME%

echo.
echo Verifying Java installation...
java -version

echo.
echo Starting Android build...
pnpm android

pause

