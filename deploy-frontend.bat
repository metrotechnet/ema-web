@echo off
setlocal

echo ====================================
echo Deploy EMA Web (imx-ema-web)
echo ====================================
echo.

where firebase >nul 2>nul
if %errorlevel% neq 0 (
  echo ERROR: Firebase CLI is not installed.
  echo Install with: npm install -g firebase-tools
  exit /b 1
)

REM Refresh extracted landing pages (index.html) from sibling projects
if not exist "public\main" mkdir "public\main"
if not exist "public\demo" mkdir "public\demo"
if not exist "public\dev" mkdir "public\dev"

copy /Y "..\ema-main\templates\index.html" "public\main\index.html" >nul
if %errorlevel% neq 0 (
  echo ERROR: Failed to copy ..\ema-main\templates\index.html
  exit /b 1
)

copy /Y "..\ema-demo\templates\index.html" "public\demo\index.html" >nul
if %errorlevel% neq 0 (
  echo ERROR: Failed to copy ..\ema-demo\templates\index.html
  exit /b 1
)

copy /Y "..\ema-dev\templates\index.html" "public\dev\index.html" >nul
if %errorlevel% neq 0 (
  echo ERROR: Failed to copy ..\ema-dev\templates\index.html
  exit /b 1
)

REM Root landing points to demo index page by default.
(
  echo ^<!DOCTYPE html^>
  echo ^<html lang="en"^>^<head^>^<meta charset="UTF-8" /^>^<meta http-equiv="refresh" content="0; url=/demo/index.html" /^>^<title^>Redirecting...^</title^>^</head^>^<body^>Go to ^<a href="/demo/index.html"^>demo/index.html^</a^>.^</body^>^</html^>
) > "public\index.html"

echo Using Firebase project: imx-ema-web
call firebase use imx-ema-web
if %errorlevel% neq 0 (
  echo ERROR: Unable to select Firebase project imx-ema-web
  exit /b 1
)

echo.
echo Deploying hosting...
call firebase deploy --only hosting
if %errorlevel% neq 0 (
  echo ERROR: Firebase deploy failed.
  exit /b 1
)

echo.
echo SUCCESS: Deployment completed for imx-ema-web.
