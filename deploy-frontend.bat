@echo off
setlocal

echo ====================================
echo Deploy EMA Web (imx-ema)
echo ====================================
echo.

where firebase >nul 2>nul
if %errorlevel% neq 0 (
  echo ERROR: Firebase CLI is not installed.
  echo Install with: npm install -g firebase-tools
  exit /b 1
)

REM Build a standalone static hosting bundle from this repo only.
if exist "public" rmdir /S /Q "public"
mkdir "public"
if %errorlevel% neq 0 (
  echo ERROR: Failed to create public directory.
  exit /b 1
)

copy /Y "templates\index.html" "public\index.html" >nul
if %errorlevel% neq 0 (
  echo ERROR: Failed to copy templates\index.html to public\index.html
  exit /b 1
)

copy /Y "templates\help.html" "public\help.html" >nul
if %errorlevel% neq 0 (
  echo ERROR: Failed to copy templates\help.html to public\help.html
  exit /b 1
)

xcopy "static" "public\static\" /E /I /Y >nul
if %errorlevel% geq 4 (
  echo ERROR: Failed to copy static assets to public\static
  exit /b 1
)

echo Using Firebase project: imx-ema
call firebase use imx-ema
if %errorlevel% neq 0 (
  echo ERROR: Unable to select Firebase project imx-ema
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
echo SUCCESS: Deployment completed for imx-ema.
