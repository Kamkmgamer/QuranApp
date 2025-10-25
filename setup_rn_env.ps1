# PowerShell script to set up Java and Android environment variables for React Native development
# Run this script as Administrator

Write-Host "Setting up React Native development environment..." -ForegroundColor Green

# Android SDK path
$androidSdkPath = "$env:LOCALAPPDATA\Android\Sdk"
$androidHome = $androidSdkPath

# Set ANDROID_HOME
Write-Host "Setting ANDROID_HOME to: $androidHome" -ForegroundColor Yellow
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $androidHome, "Machine")

# Add Android tools to PATH
$androidTools = @(
    "$androidHome\platform-tools",
    "$androidHome\tools",
    "$androidHome\tools\bin"
)

$currentPath = [Environment]::GetEnvironmentVariable("PATH", "Machine")
foreach ($tool in $androidTools) {
    if (Test-Path $tool) {
        if ($currentPath -notlike "*$tool*") {
            Write-Host "Adding Android tool to PATH: $tool" -ForegroundColor Yellow
            $currentPath = "$currentPath;$tool"
        }
    }
}

# Common Java installation paths
$possibleJavaPaths = @(
    "C:\Program Files\Eclipse Adoptium\jdk-17*",
    "C:\Program Files\Java\jdk-17*",
    "C:\Program Files\OpenJDK\jdk-17*",
    "C:\Program Files\Amazon Corretto\jdk17*",
    "C:\Program Files\Microsoft\jdk-17*"
)

$javaHome = $null

# Find Java installation
foreach ($path in $possibleJavaPaths) {
    $found = Get-ChildItem $path -ErrorAction SilentlyContinue | Sort-Object Name -Descending | Select-Object -First 1
    if ($found) {
        $javaHome = $found.FullName
        Write-Host "Found Java installation at: $javaHome" -ForegroundColor Yellow
        break
    }
}

if ($javaHome) {
    # Set JAVA_HOME
    Write-Host "Setting JAVA_HOME to: $javaHome" -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, "Machine")
    
    # Add Java to PATH
    $javaBin = Join-Path $javaHome "bin"
    if ($currentPath -notlike "*$javaBin*") {
        Write-Host "Adding Java to PATH: $javaBin" -ForegroundColor Yellow
        $currentPath = "$currentPath;$javaBin"
    }
} else {
    Write-Host "Java JDK not found in common locations." -ForegroundColor Red
    Write-Host "Please install Java JDK 17 from: https://adoptium.net/temurin/releases/?version=17" -ForegroundColor Cyan
    Write-Host "After installation, run this script again." -ForegroundColor Cyan
}

# Update PATH
[Environment]::SetEnvironmentVariable("PATH", $currentPath, "Machine")

Write-Host ""
Write-Host "Environment setup completed!" -ForegroundColor Green
Write-Host "Please restart your terminal/IDE for changes to take effect." -ForegroundColor Cyan
Write-Host ""
Write-Host "To verify installation, run:" -ForegroundColor White
Write-Host "  java -version" -ForegroundColor Gray
Write-Host "  echo `$env:JAVA_HOME" -ForegroundColor Gray
Write-Host "  echo `$env:ANDROID_HOME" -ForegroundColor Gray
Write-Host "  adb version" -ForegroundColor Gray

